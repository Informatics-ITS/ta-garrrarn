import Image from 'next/image';
import React, { useState } from 'react';

function SelectOption({ selectedStudyType }) {
  const options = [
    { name: 'Dasar Pemrograman', icon: '/fe.png' },
    { name: 'Struktur Data', icon: '/be.png' },
    { name: 'Pemrograman Web', icon: '/web.png' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <h2 className="text-center mb-2 text-lg">
        Kamu ingin membuat materi belajar pribadi untuk mata kuliah apa?
      </h2>
      <div className="flex none justify-center space-x-1 mt-5">
        {options.map((option) => (
          <div
            key={option.name}
            className={` w-45 h-40 p-5 flex flex-col items-center justify-center border rounded-xl hover:border-blue-400 cursor-pointer ${
              option.name === selectedOption ? 'border-blue-400' : ''
            }`}
            onClick={() => {
              setSelectedOption(option.name);
              selectedStudyType(option.name);
            }}
          >
            <Image src={option.icon} alt={option.name} width={50} height={50} />
            <h2 className="text-sm mt-2">{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectOption;