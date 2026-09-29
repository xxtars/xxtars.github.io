// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-i-joined-lut-university-as-a-junior-researcher-in-the-computer-vision-and-pattern-recognition-laboratory-cvprl",
          title: 'I joined LUT University as a Junior Researcher in the Computer Vision and...',
          description: "",
          section: "News",},{id: "news-one-paper-on-test-time-training-for-facial-action-unit-detection-was-accepted-to-icme-2025",
          title: 'One paper on test-time training for facial action unit detection was accepted to...',
          description: "",
          section: "News",},{id: "news-one-paper-on-mllm-for-identity-free-emotion-understanding-was-accepted-to-acm-mm-2025",
          title: 'One paper on MLLM for identity-free emotion understanding was accepted to ACM MM...',
          description: "",
          section: "News",},{id: "news-one-paper-on-eulerian-motion-aware-micro-gesture-recognition-was-accepted-to-mir",
          title: 'One paper on Eulerian motion-aware micro-gesture recognition was accepted to MIR.',
          description: "",
          section: "News",},{id: "news-one-paper-on-mamba-for-micro-gesture-recognition-was-accepted-to-ieee-tmm",
          title: 'One paper on Mamba for micro-gesture recognition was accepted to IEEE TMM.',
          description: "",
          section: "News",},{id: "news-one-paper-on-facial-action-unit-based-emotion-recognition-was-accepted-to-ieee-tip",
          title: 'One paper on facial action unit-based emotion recognition was accepted to IEEE TIP....',
          description: "",
          section: "News",},{id: "news-one-paper-on-identity-free-emotion-understanding-was-accepted-to-ieee-taffc",
          title: 'One paper on identity-free emotion understanding was accepted to IEEE TAFFC.',
          description: "",
          section: "News",},{id: "news-one-paper-on-evaluating-emotion-hallucinations-in-mllms-was-accepted-to-iclr-2026",
          title: 'One paper on evaluating emotion hallucinations in MLLMs was accepted to ICLR 2026....',
          description: "",
          section: "News",},{id: "news-one-paper-on-human-action-dynamics-understanding-was-accepted-to-kbs",
          title: 'One paper on human action dynamics understanding was accepted to KBS.',
          description: "",
          section: "News",},{id: "news-one-paper-on-facial-emotion-understanding-with-instruction-tuning-was-accepted-to-ijcv",
          title: 'One paper on facial emotion understanding with instruction tuning was accepted to IJCV....',
          description: "",
          section: "News",},{id: "news-one-paper-on-interpretable-diving-action-quality-assessment-was-accepted-to-neurips-2026",
          title: 'One paper on interpretable diving action quality assessment was accepted to NeurIPS 2026....',
          description: "",
          section: "News",},{id: "teachings-machine-vision-and-digital-image-analysis",
          title: 'Machine Vision and Digital Image Analysis',
          description: "This course introduces fundamental concepts and methods in digital image processing and machine vision, including classical techniques and modern deep learning approaches.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/machine-vision-and-digital-image-analysis-2025/";
            },},{id: "teachings-machine-vision-and-digital-image-analysis",
          title: 'Machine Vision and Digital Image Analysis',
          description: "This course introduces fundamental concepts and methods in digital image processing and machine vision, including classical techniques and modern deep learning approaches.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/machine-vision-and-digital-image-analysis-2026/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=CzmYh2EAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0005-5924-4178", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bohao-xing-2780273b9", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xxtars", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/%7B%22value%22=%3E%22/assets/pdf/CV_TENK_BohaoXING.pdf%22,%20%22logo%22=%3E%22cv-icon%22%7D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
