import undrawIcon from '../assets/undraw-icon.svg';

export function LessonIntroduction() {
  return (
    <div className="flex flex-col md:flex-row m-auto p-4 gap-3">
      <img src={undrawIcon} alt="Icon" className="w-[450px]" />

      <h1 className="text-3xl font-bold flex-1 tracking-wide max-w-lg">Você pode começar a assistir às aulas navegando no sidebar :)</h1>
    </div>
  )
}