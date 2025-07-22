import { courseOutlineAIModel } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {courseId, topic, courseType, difficultyLevel, createdBy}=await req.json();

    // Generate a study material for '+topic+' for '+courseType+' and level of difficulty  will be '+difficultyLevel+' with sumery of course, List of Chapters (Max 5) along with summery and Emoji icon for each chapter in different object, Topic list in each chapter, and all result in  JSON format'
    const PROMPT='Buatkan materi belajar untuk '+topic+' untuk '+courseType+' dan tingkat kesulitan '+difficultyLevel+' dengan ringkasan kursus, Daftar Bab (Max 5) beserta ringkasan dan ikon Emoji untuk setiap bab dalam objek yang berbeda, Daftar Topik di setiap bab, dan semua hasil dalam format JSON'
    // Generate Course Layout using AI
    const aiResp=await courseOutlineAIModel.sendMessage(PROMPT)
    const aiResult= JSON.parse(aiResp.response.text());

    // Save the result along with User Input
    const dbResult=await db.insert(STUDY_MATERIAL_TABLE).values({
        courseId:courseId,
        courseType:courseType,
        createdBy:createdBy,
        topic:topic,
        courseLayout:aiResult
    }).returning({resp:STUDY_MATERIAL_TABLE})

    //Trigger the Inngest function to generate chapter notes

    const result=await inngest.send({
        name:'notes.generate',
        data:{
            course: dbResult[0].resp
        }
    })

    console.log(result);
    return NextResponse.json({result:dbResult[0]})
}