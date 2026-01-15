// Traduções do site - Português (BR) e Inglês
const translations = {
    'pt': {
        // Meta
        'site.title': 'Carlos Augusto Rolim da Motta - Portfólio Profissional | Desenvolvedor Full Stack & Especialista em Segurança',
        'site.description': 'Portfólio profissional de Carlos Augusto Rolim da Motta - 16 anos de experiência em desenvolvimento web, infraestrutura e segurança da informação.',

        // Hero
        'hero.subtitle': 'Desenvolvedor Full Stack & Especialista em Segurança',

        // Navigation
        'nav.about': 'Sobre',
        'nav.projects': 'Projetos',
        'nav.experience': 'Experiência',
        'nav.skills': 'Habilidades',
        'nav.achievements': 'Conquistas',

        // About Section
        'about.title': 'Sobre Mim',
        'about.text': 'Servidor público estadual na <strong>SECTET-PA</strong> desde 2010, com sólida experiência em desenvolvimento de sistemas web, infraestrutura de TI e segurança da informação. Especializado em criar soluções tecnológicas que modernizam e otimizam a gestão pública. Atualmente cursando <strong>Mestrado em Ciência da Computação pela UFPA</strong>, com pesquisa focada em tecnologia assistiva para TEA. Certificado em <strong>Cibersegurança</strong> pelo programa Hackers do Bem (RNP) e com múltiplas certificações Cisco e Microsoft.',

        // Projects Section
        'projects.title': 'Projetos em Destaque',
        'projects.gconweb.title': 'GCONWEB',
        'projects.gconweb.desc': 'Sistema completo de Gerenciamento de Contratos desenvolvido para a Secretaria de Ciência, Tecnologia e Educação Profissional e Tecnológica do Estado do Pará (SECTET). Modernizou o processo de gestão contratual, trazendo eficiência e transparência. Projeto reconhecido com o segundo lugar do <strong>Prêmio Inova Servidor 2025</strong>.',
        'projects.point.title': 'POINT',
        'projects.point.desc': 'Sistema de Gerenciamento de Folha de Frequência e Relatório de Atividades de bolsistas. Implementa funcionalidades de registro de frequência e relatório de atividades mensal, além de relatórios automatizados de folha de pagamento e gestão de jornada de trabalho.',
        'projects.dental.title': 'Consultório Odontológico',
        'projects.dental.desc': 'Sistema de Gestão para Consultório Odontológico desenvolvido para otimizar o agendamento de consultas. Além disso, gerencia prontuários, tratamentos e faturamento, proporcionando uma experiência integrada para profissionais e pacientes.',
        'projects.btex.title': 'BTex Manager',
        'projects.btex.desc': 'Sistema de gerenciamento de referências bibliográficas no formato BibTeX. Desenvolvida com foco em segurança, usabilidade e performance, a ferramenta permite importar, organizar, pesquisar e exportar referências acadêmicas de forma eficiente.',
        'projects.webmonitor.title': 'WebMonitor',
        'projects.webmonitor.desc': 'O WebMonitor é uma solução completa e robusta para monitoramento contínuo de disponibilidade, performance e saúde de múltiplos sites simultaneamente. O sistema utiliza algoritmos avançados de tomada de decisão multicritério (TOPSIS e AHP) para priorizar sites e detectar anomalias automaticamente.',

        // Experience Section
        'experience.title': 'Trajetória Profissional',
        'experience.sectet.date': '2010 - Presente',
        'experience.sectet.title': 'Analista de Sistemas - SECTET/PA',
        'experience.sectet.desc': 'Desenvolvimento e manutenção de sistemas web críticos para a gestão pública. Criação do GCONWEB e POINT, além de gestão de infraestrutura de TI e segurança da informação.',
        'experience.hackers.date': '2023 - 2024',
        'experience.hackers.title': 'Programa Hackers do Bem - RNP',
        'experience.hackers.desc': 'Formação intensiva em Cibersegurança com certificações em Blue Team e operações de segurança. Capacitação avançada em resposta a incidentes e defesa cibernética.',
        'experience.masters.date': '2024 - 2025',
        'experience.masters.title': 'Mestrando em Ciência da Computação - UFPA',
        'experience.masters.desc': 'Pesquisa em tecnologia assistiva para pessoas com Transtorno do Espectro Autista (TEA), aplicando conhecimentos em desenvolvimento de software e inteligência artificial.',

        // Skills Section
        'skills.title': 'Habilidades Técnicas',
        'skills.development': 'Desenvolvimento',
        'skills.security': 'Segurança & Infra',
        'skills.devops': 'DevOps & Ferramentas',
        'skills.php.desc': 'Sistemas web, APIs e automação',
        'skills.js.desc': 'Aplicações interativas e consumo de APIs',
        'skills.sql.desc': 'Modelagem, queries e otimização',
        'skills.python.desc': 'Automação, integrações e análise de dados',
        'skills.bootstrap.desc': 'Design responsivo e interfaces',
        'skills.cyber.desc': 'Certificado Hackers do Bem (RNP)',
        'skills.hardening.desc': 'Redução da superfície de ataque e configurações seguras',
        'skills.fortigate.desc': 'Configuração e gestão de firewall',
        'skills.windows.desc': 'Certificação Microsoft AZ-800',
        'skills.linux.desc': 'Administração e deploy de servidores',
        'skills.docker.desc': 'Containerização de aplicações',
        'skills.git.desc': 'Controle de versão e colaboração',
        'skills.apache.desc': 'Servidor Web Apache',
        'skills.bancodedados': 'Bancos de Dados (SQL / MySQL)',
        'skills.ciberseguranca': 'Cibersegurança',

        // Achievements Section
        'achievements.title': 'Conquistas & Reconhecimentos',
        'achievements.inova.title': 'Prêmio Inova Servidor 2025',
        'achievements.inova.desc': 'Estado do Pará (EGPA)',
        'achievements.nota10.title': 'Servidor Nota 10 2012',
        'achievements.nota10.desc': 'EGPA - Reconhecimento Estadual',
        'achievements.masters.title': 'Mestrado PPGCC/UFPA',
        'achievements.masters.desc': 'Ciência da Computação - 2025',
        'achievements.hackers.title': 'Hackers do Bem',
        'achievements.hackers.desc': 'RNP - Cibersegurança',
        'achievements.cisco.title': 'Certificações Cisco',
        'achievements.cisco.desc': 'CyberOps & Network Security',
        'achievements.azure.title': 'Microsoft AZ-800',
        'achievements.azure.desc': 'Windows Server Hybrid Admin',

        // Footer
        'footer.title': 'Vamos Conversar?',
        'footer.text': 'Interessado em colaborar ou discutir projetos? Entre em contato através das redes sociais ou envie uma mensagem direta. Estou sempre aberto a novas oportunidades e desafios.',
        'footer.location': 'Belém, Pará | Brasil',
        'footer.copyright': '© 2026 - Desenvolvido com dedicação e café ☕',

        // Buttons and labels
        'btn.previous': 'Anterior',
        'btn.next': 'Próximo',
        'btn.backToTop': 'Voltar ao topo',
        'lang.selector': 'Idioma'
    },

    'en': {
        // Meta
        'site.title': 'Carlos Augusto Rolim da Motta - Professional Portfolio | Full Stack Developer & Security Specialist',
        'site.description': 'Professional portfolio of Carlos Augusto Rolim da Motta - 16 years of experience in web development, infrastructure and information security.',

        // Hero
        'hero.subtitle': 'Full Stack Developer & Security Specialist',

        // Navigation
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.achievements': 'Achievements',

        // About Section
        'about.title': 'About Me',
        'about.text': 'State public servant at <strong>SECTET-PA</strong> since 2010, with solid experience in web systems development, IT infrastructure, and information security. Specialized in creating technological solutions that modernize and optimize public management. Currently pursuing a <strong>Master\'s in Computer Science at UFPA</strong>, with research focused on assistive technology for ASD. Certified in <strong>Cybersecurity</strong> by the Hackers do Bem program (RNP) with multiple Cisco and Microsoft certifications.',

        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.gconweb.title': 'GCONWEB',
        'projects.gconweb.desc': 'Complete Contract Management System developed for the Secretary of Science, Technology and Professional and Technological Education of the State of Pará (SECTET). Modernized the contract management process, bringing efficiency and transparency. Project recognized with second place in the <strong>Inova Servidor 2025 Award</strong>.',
        'projects.point.title': 'POINT',
        'projects.point.desc': 'Attendance Sheet and Activity Report Management System for scholarship holders. Implements attendance tracking and monthly activity reporting, as well as automated payroll reports and workday management.',
        'projects.dental.title': 'Dental Office',
        'projects.dental.desc': 'Dental Office Management System developed to optimize appointment scheduling. Also manages medical records, treatments and billing, providing an integrated experience for professionals and patients.',
        'projects.btex.title': 'BTex Manager',
        'projects.btex.desc': 'Bibliographic reference management system in BibTeX format. Developed with focus on security, usability and performance, the tool allows importing, organizing, searching and exporting academic references efficiently.',
        'projects.webmonitor.title': 'WebMonitor',
        'projects.webmonitor.desc': 'WebMonitor is a complete and robust solution for continuous monitoring of availability, performance and health of multiple websites simultaneously. The system uses advanced multi-criteria decision-making algorithms (TOPSIS and AHP) to prioritize sites and automatically detect anomalies.',

        // Experience Section
        'experience.title': 'Professional Journey',
        'experience.sectet.date': '2010 - Present',
        'experience.sectet.title': 'Systems Analyst - SECTET/PA',
        'experience.sectet.desc': 'Development and maintenance of critical web systems for public management. Creation of GCONWEB and POINT, as well as IT infrastructure management and information security.',
        'experience.hackers.date': '2023 - 2024',
        'experience.hackers.title': 'Hackers do Bem Program - RNP',
        'experience.hackers.desc': 'Intensive Cybersecurity training with Blue Team certifications and security operations. Advanced training in incident response and cyber defense.',
        'experience.masters.date': '2024 - 2025',
        'experience.masters.title': 'Master\'s Student in Computer Science - UFPA',
        'experience.masters.desc': 'Research in assistive technology for people with Autism Spectrum Disorder (ASD), applying knowledge in software development and artificial intelligence.',

        // Skills Section
        'skills.title': 'Technical Skills',
        'skills.development': 'Development',
        'skills.security': 'Security & Infra',
        'skills.devops': 'DevOps & Tools',
        'skills.php.desc': 'Web systems, APIs and automation',
        'skills.js.desc': 'Interactive applications and API consumption',
        'skills.sql.desc': 'Modeling, queries and optimization',
        'skills.python.desc': 'Automation, integrations and data analysis',
        'skills.bootstrap.desc': 'Responsive design and interfaces',
        'skills.cyber.desc': 'Hackers do Bem Certified (RNP)',
        'skills.hardening.desc': 'Attack surface reduction and secure configurations',
        'skills.fortigate.desc': 'Firewall configuration and management',
        'skills.windows.desc': 'Microsoft AZ-800 Certification',
        'skills.linux.desc': 'Server administration and deployment',
        'skills.docker.desc': 'Application containerization',
        'skills.git.desc': 'Version control and collaboration',
        'skills.apache.desc': 'Apache Web Server',
        'skills.bancodedados': 'Databases (SQL / MySQL)',
        'skills.ciberseguranca': 'Cybersecurity',

        // Achievements Section
        'achievements.title': 'Achievements & Recognitions',
        'achievements.inova.title': 'Inova Servidor 2025 Award',
        'achievements.inova.desc': 'State of Pará (EGPA)',
        'achievements.nota10.title': 'Grade 10 Employee 2012',
        'achievements.nota10.desc': 'EGPA - State Recognition',
        'achievements.masters.title': 'Master\'s PPGCC/UFPA',
        'achievements.masters.desc': 'Computer Science - 2025',
        'achievements.hackers.title': 'Hackers do Bem',
        'achievements.hackers.desc': 'RNP - Cybersecurity',
        'achievements.cisco.title': 'Cisco Certifications',
        'achievements.cisco.desc': 'CyberOps & Network Security',
        'achievements.azure.title': 'Microsoft AZ-800',
        'achievements.azure.desc': 'Windows Server Hybrid Admin',

        // Footer
        'footer.title': 'Let\'s Talk?',
        'footer.text': 'Interested in collaborating or discussing projects? Get in touch through social media or send a direct message. I\'m always open to new opportunities and challenges.',
        'footer.location': 'Belém, Pará | Brazil',
        'footer.copyright': '© 2026 - Developed with dedication and coffee ☕',

        // Buttons and labels
        'btn.previous': 'Previous',
        'btn.next': 'Next',
        'btn.backToTop': 'Back to top',
        'lang.selector': 'Language'
    }
};

// Idioma padrão (inglês como solicitado)
let currentLanguage = localStorage.getItem('siteLanguage') || 'en';

// Função para obter tradução
function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Função para alterar idioma
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('siteLanguage', lang);
        applyTranslations();
        updateLanguageSelector();
    }
}

// Função para aplicar traduções
function applyTranslations() {
    // Atualizar lang do HTML
    document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'en';

    // Atualizar título da página
    document.title = t('site.title');

    // Atualizar meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', t('site.description'));
    }

    // Atualizar todos os elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);

        if (element.hasAttribute('data-i18n-html')) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });

    // Atualizar aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        element.setAttribute('aria-label', t(key));
    });
}

// Função para atualizar o seletor de idioma
function updateLanguageSelector() {
    const langText = document.getElementById('currentLangText');
    if (langText) {
        langText.textContent = currentLanguage === 'pt' ? 'PT' : 'EN';
    }

    // Atualizar classes ativas nos botões
    document.querySelectorAll('.lang-option').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    // Aplicar traduções iniciais
    applyTranslations();
    updateLanguageSelector();

    // Configurar evento de toggle do dropdown
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');

    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        // Fechar dropdown ao clicar fora
        document.addEventListener('click', function (e) {
            if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('show');
            }
        });
    }

    // Configurar botões de idioma
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('show');
        });
    });
});
