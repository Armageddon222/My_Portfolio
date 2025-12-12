import React, { useEffect, useState } from 'react';
import './Home.css';
import AvatarImage from './assets/Avatar.png';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  const terminalMessages = [
    "> Initializing portfolio system...",
    "> Loading C++ expertise modules...",
    "> Connecting to database clusters...",
    "> Establishing network protocols...",
    "> Activating cyber security layers...",
    "> System ready. Welcome Yuki!"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Термінальна анімація
    const terminalInterval = setInterval(() => {
      if (currentLine < terminalMessages.length) {
        setTerminalLines(prev => [...prev, terminalMessages[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }
    }, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(terminalInterval);
    };
  }, [currentLine]);

  const skills = {
    languages: [
      { name: "C++", level: 37, icon: "⚙️" },
      { name: "Python", level: 5, icon: "🐍" },
      { name: "SQL", level: 63, icon: "🗄️" },
      { name: "Bash", level: 0, icon: "💻" }
    ],
    technologies: [
      { name: "Cyber Security", level: 28, icon: "🛡️" },
      { name: "Network Protocols", level: 35, icon: "🌐" },
      { name: "Database Systems", level: 52, icon: "🔐" },
      { name: "System Architecture", level: 21, icon: "🏗️" }
    ],
    tools: [
      { name: "Linux/Unix", level: 19, icon: "🐧" },
      { name: "Docker", level: 0, icon: "🐋" },
      { name: "Git", level: 82, icon: "📊" },
      { name: "Wireshark", level: 37, icon: "🕵️" }
    ]
  };

  const projects = [
    {
      title: "PolytechXXX",
      description: "Сайт для нашої групи. Повний стек розробки з використанням C++ для бекенду. Мета - спостити життя нашої групи в пошуку пар і дз.",
      tags: ["DataBase", "Full-Stack"],
      year: "2025",
      githubUrl: "https://github.com/Armageddon222/PolytechXXX" 
    },
    {
      title: "My_Portfolio",
      description: "Зараз ви на ньому! Портфоліо розроблене з використанням React.js для фронтенду, цей сайт демонструє мої навички та проекти.",
      tags: ["Node.js", "Java_Script", "CSS", "React.js", "Full-Stack"],
      year: "2025",
      githubUrl: "https://github.com/Armageddon222" 
    },
    {
      title: "JDM Auto",
      description: "Моя курсова робота. Сайт для продажу японських автомобілів з базою даних автомобілів, користувачів та замовлень.",
      tags: ["C++", "React.js", "Node.js", "DataBase", "Full-Stack"],
      year: "2026?",
      githubUrl: "https://github.com/Armageddon222" 
    }
  ];

  const stats = [
    { value: "10K+", label: "Рядків коду" },
    { value: "3+", label: "Проєкти" },
    { value: "24/7", label: "Готовий вийти на зв'язок" },
    { value: "99.9%", label: "Успіхів" }
  ];

  return (
    <div className="home-page">
      {/* Hero секція */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="badge-tech">
                <span className="badge-icon">🎄</span>
                <span>Новорічний код 2025</span>
              </div>

              <h1>
                <span className="gradient-text">PPFC Student</span>
                <br />
                <span className="subtitle">Cyber Security & Database</span>
              </h1>

              <p className="hero-description">
                Привіт, я Yuki, вчусь на програміста в ЧПФК. Я є початківцем у світі C++ розробки з особливим інтересом до кібербезпеки та баз даних. Моя мета - створювати надійні та ефективні рішення, які захищають інформацію та оптимізують роботу систем.
              </p>

              <div className="terminal-preview">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="terminal-title">terminal.exe</span>
                </div>
                <div className="terminal-content">
                  {terminalLines.map((line, index) => (
                    <div key={index} className="terminal-line">
                      <span className="prompt">$</span> {line}
                    </div>
                  ))}
                  <div className="cursor">_</div>
                </div>
              </div>
            </div>

            <div className="hero-profile">
              <div className="profile-card">
                <div className="avatar-container">
                  <img
                    src={AvatarImage}
                    alt="Programmer Avatar"
                    className="profile-avatar"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="avatar-placeholder">👨‍💻</div>';
                    }}
                  />
                  <div className="avatar-ring"></div>
                  <div className="avatar-status"></div>
                </div>

                <div className="profile-info">
                  <h3>Yuki Takuto</h3>
                  <p className="profile-title">Cтудент 522 групи ЧПФК</p>

                  <div className="profile-stats">
                    <div className="stat">
                      <div className="stat-value">1</div>
                      <div className="stat-label">рік досвіду в кодингу</div>
                    </div>
                    <div className="stat">
                      <div className="stat-value">C++</div>
                      <div className="stat-label">основна мова</div>
                    </div>
                  </div>

                  <div className="profile-tags">
                    <span className="tag">#CyberSecurity</span>
                    <span className="tag">#Database</span>
                    <span className="tag">#Full-stack</span>
                    <span className="tag">#API</span>
                  </div>
                </div>

                <div className="profile-decoration">
                  <div className="decoration-item">❄️</div>
                  <div className="decoration-item">🎄</div>
                  <div className="decoration-item">💥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills секція */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Технології & Навички</h2>
            <p className="section-subtitle">Спеціалізації та технології, якими я володію</p>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3><span className="category-icon">💻</span> Мови програмування</h3>
              <div className="skills-list">
                {skills.languages.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3><span className="category-icon">🛠️</span> Технології</h3>
              <div className="skills-list">
                {skills.technologies.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3><span className="category-icon">🔧</span> Інструменти</h3>
              <div className="skills-list">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="code-showcase">
            <div className="code-header">
              <span>// Приклад коду</span>
            </div>
            <pre className="code-block">
              {`
// Оптимізація запиту до бази даних
std::vector<User> optimizeQuery(Database& db, 
                               const std::string& query) {
    auto start = std::chrono::high_resolution_clock::now();
    
    // Кешування результатів
    static std::unordered_map<std::string, 
                              std::vector<User>> cache;
    
    if (cache.find(query) != cache.end()) {
        return cache[query];
    }
    
    // Виконання оптимізованого запиту
    auto result = db.executeOptimized(query);
    cache[query] = result;
    
    auto end = std::chrono::high_resolution_clock::now();
    auto duration = end - start;
    
    std::cout << "Query optimized: " 
              << duration.count() << "ms\\n";
    return result;
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Projects секція */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Останні проекти</h2>
            <p className="section-subtitle">Системи та рішення, які я розробив</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <div className="project-year">{project.year}</div>
                  <div className="project-icon">📁</div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                {/* Використовуємо githubUrl з об'єкта проекту */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-terminal"
                >
                  <span>View Code</span>
                  <span>👁️</span>
                </a>
              </div>
            ))}
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секція */}
      <section className="cta-section">
        <div className="container-narrow">
          <div className="cta-card">
            <h2>Вітаю ви долистали до кінця!!!</h2>
            <p className="cta-text">
              Дякую за відвідування мого портфоліо! Якщо ви зацікавлені у співпраці або маєте запитання, не соромтеся зв'язатися зі мною.
            </p>
            <div className="cta-actions">
              {/* Виправив Telegram посилання (прибрав @) */}
              <a href="https://t.me/Yuki_Takuto" target="_blank" rel="noopener noreferrer" className="btn btn-tech">
                <span>Telegram</span>
                <span>✈️</span>
              </a>

              <a href="https://discord.com/users/882216781798838373" target="_blank" rel="noopener noreferrer" className="btn btn-hacker">
                <span>Discord</span>
                <span>💬</span>
              </a>
            </div>
            <div className="xmas-message">
              <span>🎅 З Новим 2026 роком та продуктивного кодування!</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;