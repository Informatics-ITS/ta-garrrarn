// components/TopicInput.jsx
'use client';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function TopicInput({ studyType, setTopic, setDifficultyLevel}) {
  return (
    <div className="mt-10 w-full flex flex-col">

      {/* Sub-topik kondisional */}
      {studyType === 'Dasar Pemrograman' && (
        <>
          <h2 className="mt-5 mb-3">Pilih materi kuliah Dasar Pemrograman apa yang kamu ingin pelajari</h2>
          <Select onValueChange={(val) => setTopic(val)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih sub-topik" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pengenalan Pengembangan Perangkat Lunak">Pengenalan Pengembangan Perangkat Lunak</SelectItem>
              <SelectItem value="Penerjemahan Desain ke Algoritma">Penerjemahan Desain ke Algoritma</SelectItem>
              <SelectItem value="Struktur Program dalam Bahasa C">Struktur Program dalam Bahasa C</SelectItem>
              <SelectItem value="Pemrograman Modular dengan Pendekatan Top-Down">Pemrograman Modular dengan Pendekatan Top-Down</SelectItem>
              <SelectItem value="Pengujian dan Debugging Program">Pengujian dan Debugging Program</SelectItem>
            </SelectContent>
          </Select>
        </>
      )}

      {studyType === 'Struktur Data' && (
        <>
          <h2 className="mt-5 mb-3">Pilih materi kuliah Struktur Data apa yang kamu ingin pelajari</h2>
          <Select onValueChange={(val) => setTopic(val)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih sub-topik" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tipe Data Abstrak">Tipe Data Abstrak</SelectItem>
              <SelectItem value="Struktur Data Linier: Stack dan Queue">Struktur Data Linier: Stack dan Queue</SelectItem>
              <SelectItem value="Struktur Data Non-Linier: Tree">Struktur Data Non-Linier: Tree</SelectItem>
              <SelectItem value="Algoritma Sorting dan Searching">Algoritma Sorting dan Searching</SelectItem>
              <SelectItem value="Hash Table">Hash Table</SelectItem>
            </SelectContent>
          </Select>
        </>
      )}

      {studyType === 'Pemrograman Web' && (
        <>
          <h2 className="mt-5 mb-3">Pilih materi kuliah Pemrograman Web apa yang kamu ingin pelajari</h2>
          <Select onValueChange={(val) => setTopic(val)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih sub-topik" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pengenalan Teknologi Web">Pengenalan Teknologi Web</SelectItem>
              <SelectItem value="Layout Web Front End Cascading Style Sheet">Layout Web Front End Cascading Style Sheet</SelectItem>
              <SelectItem value="Java Script">Java Script</SelectItem>
              <SelectItem value="Bootstrap">Bootstrap</SelectItem>
              <SelectItem value="Teknologi Ajax">Teknologi Ajax</SelectItem>
              <SelectItem value="Data dan Query">Data dan Query</SelectItem>
              <SelectItem value="Manajemen Dokumen">Manajemen Dokumen</SelectItem>
            </SelectContent>
          </Select>
        </>
      )}

      <h2 className="mt-5 mb-3">Pilih tingkat kesulitan</h2>
      <Select onValueChange={(value) => setDifficultyLevel(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tingkat kesulitan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Easy">Mudah</SelectItem>
          <SelectItem value="Moderate">Sedang</SelectItem>
          <SelectItem value="Hard">Susah</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default TopicInput;