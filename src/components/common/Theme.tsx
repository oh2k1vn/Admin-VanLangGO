import { useTheme } from '../../contexts/ThemeContext';

export function Theme() {
  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    setTheme(!theme);
  }

  return (
    <div className=' h-screen bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center '>
      <div className='w-[680px] h-[340px] bg-zinc-300 dark:bg-zinc-600 flex items-center justify-center gap-3'>
        <h1 className='font-bold text-2xl text-zinc-700 dark:text-zinc-100 '>Dark and Light</h1>

        {theme ? (
          <div onClick={handleToggleTheme}>ON</div>
        ) : (
          <div onClick={handleToggleTheme}>OFF</div>
        )}
      </div>
    </div>
  );
}
