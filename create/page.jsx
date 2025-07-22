'use client';

import React, { useState } from 'react';
import SelectOption from "./_components/SelectOption";
import TopicInput from "./_components/TopicInput";
import { Button } from '@/components/ui/button';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Create() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const GenerateCourseOutline = async () => {
    const courseId = uuidv4();
    setLoading(true);
    try {
      const result = await axios.post('/api/generate-course-outline', {
        courseId,
        ...formData,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });
      toast.success('Kursusmu telah siap!');
      router.replace('/dashboard');
      console.log(result.data);
    } catch (error) {
      toast.error('Gagal membuat kursus. Coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
      <h2 className="font-bold text-3xl text-blue-500">
        Mulailah Membuat Materi Studi Pribadi Anda
      </h2>
      <p className="text-gray-500 text-lg mt-2">
        Isi Semua detail untuk menghasilkan materi pembelajaran untuk proyek Anda berikutnya
      </p>

      <div className="mt-10 w-full">
        {step === 0 && (
          <SelectOption
            selectedStudyType={(value) => handleUserInput('courseType', value)}
          />
        )}
        {step === 1 && (
          <TopicInput
            studyType={formData.courseType}
            setTopic={(value) => handleUserInput('topic', value)}
            setDifficultyLevel={(value) => handleUserInput('difficultyLevel', value)}
            setSubTopic={(value) => handleUserInput('subTopic', value)}
          />
        )}
      </div>

      <div className="flex justify-between w-full mt-32">
        {step > 0 ? (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            Sebelumnya
          </Button>
        ) : (
          <div />
        )}

        {step === 0 ? (
          <Button onClick={() => setStep(1)}>Selanjutnya</Button>
        ) : (
          <Button onClick={GenerateCourseOutline} disabled={loading}>
            {loading ? <Loader className="animate-spin" /> : 'Generate'}
          </Button>
        )}
      </div>
    </div>
  );
}
