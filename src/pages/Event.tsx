import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { LessonIntroduction } from "../components/LessonIntroduction";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    const [isSidebarOpened, setIsSidebarOpened] = useState(false);

    function handleOpenSidebar() {
        setIsSidebarOpened(!isSidebarOpened);
    }

    useEffect(() => {
        setIsSidebarOpened(!isSidebarOpened);
    }, [slug])

    return (
        <div className="flex flex-col min-h-screen">
            <Header
                onSidebarOpened={handleOpenSidebar}
                isSidebarOpened={isSidebarOpened}
            />
            <main className="flex flex-1">
                { slug
                    ? <Video lessonSlug={slug} />
                    : <LessonIntroduction /> 
                }
                {(window.innerWidth >= 1024 || isSidebarOpened) && (
                    <Sidebar />
                )}
            </main>
        </div>
    );
}
