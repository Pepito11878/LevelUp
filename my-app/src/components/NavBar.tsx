export const NavBar = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-10 justify-center align-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Video">Video</a>
          </li>
          <li>
            <a href="/Channels">Channels</a>
          </li>
          <li>
            <a href="/FreeCoaching">Free Coaching</a>
          </li>
          <li>
            <a href="/AdvancedCoaching">Advanced Coaching</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
