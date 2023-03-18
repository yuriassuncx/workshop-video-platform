import { ChangeEvent, SetStateAction, useState } from 'react';

import { Area, useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

export function Sidebar() {
    const [selectedAreaName, setSelectedAreaName] = useState<Area.Frontend | Area.Uiux>(Area.Frontend);
    
    const { data } = useGetLessonsQuery({
        variables: {
            area: selectedAreaName,
        },
    });

    return (
        <aside className="w-full lg:w-[348px] bg-gray-700 p-6 border-l border-gray-600 absolute lg:relative z-50">
            <div className="flex flex-col gap-2">
                <span className="font-bold text-2xl block">
                    Cronograma de aulas
                </span>

                <div className="block border-b border-gray-500 pb-6 mb-6 z-[60]">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="area" className="text-sm font-semibold">Selecione a área que desejar:</label>
                        <select
                            name="area"
                            id="area"
                            defaultValue={Area.Frontend}
                            onChange={(e) => setSelectedAreaName(e.target.value as Area)}
                            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                        >
                            <option key={Area.Frontend} value={Area.Frontend}>{Area.Frontend}</option>
                            <option key={Area.Uiux} value={Area.Uiux}>{Area.Uiux}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 md:h-screen overflow-y-scroll scrollbar">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    );
}
