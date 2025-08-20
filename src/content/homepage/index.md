---
# Does not contain meta customizations because it is the homepage and config is already set in the config file

banner:
  title: '<span class="text-accent text-shadow-[0px_5px_15px] shadow-accent/10">Hi</span>, my name is <span class="text-blue-500">Javier Serrano</span>'
  title_size: "text-4xl md:text-6xl"
  content: "I'm an Embedded Software Developer specialized in DSP, AI and Power Electronics."  
  image: /images/user-picture_fit.png
  buttons:
    - label: Need a freelance?
      href: "/services"
      target: "_self"
      icon: _ChevronDown
      addClasses: "w-full bg-gray-900 text-white hover:bg-accent dark:border-white/10 dark:border"

sections:
  - title: What I do
    content: "I work as a freelance for companies and teams of all sizes. I can dive into any project and technology, and play different roles in a team. My years enrolled in different tasks and companies turned me into a highly technical and creative problem-solver. <br/><br/>I am passionate on what I do, and always stay commited with my given purpose. I will always look further ahead to ease the work of my colleagues and leaders, and make communication a priority for success.<br/>"
    image: /images/Smiling_picture.png

  - title: About my experience
    content: "My experience was earned working on many different projects, as well as studying powerful technologies, both during my academic and working years. I am a naturally-curious person, always excited to learn more.<br/><br/>I am happy to share with you a deeper insight of my background. You can find more in this blog."
    image: /images/Working.png
    buttons:
      - label: "Download my CV"
        href: "/downloads/CV.pdf"
        target: "_blank"
        icon: _Download
        addClasses: "bg-accent text-white hover:bg-accent/80"

section_separator:
  title: "Companies I've worked with"

company_logos:
  logos:
    - name: "Versa"
      logo: "/images/banner/versa.png"
      alt: "Versa Logo"
      href: "https://versades.com/en/"
    - name: "UPV"
      logo: "/images/banner/UPV_Lite_Grey.png"
      alt: "UPV Logo"
      href: "https://www.upv.es/index-en.html"
    - name: "Zigor"
      logo: "/images/banner/zigor.png"
      alt: "Zigor Logo"
      href: "https://zigor.com/en/"
    - name: "Intellisense"
      logo: "/images/banner/Intellisense.png"
      alt: "Intellisense Logo"
      href: "https://www.intellisense.hu/"
    - name: "Abervian"
      logo: "/images/banner/abervian.png"
      alt: "Intellisense Logo"
      href: "https://www.abervian.es/"

section_separator_after_logos:
  title: "Some of my recent work"

projects:
  - title: Vibratio
    content: "Vibratio is a startup project that consists on making a real-time reverb cancelling system for speakers. My work started with the atchitecture conception, and ended with an embedded system that can play aptX audio and run configurable DSP pipelines in real time by using a phone app. For this task an STM32H7 and Qualcomm QCC5125 were used. The DSP capabilities in ARM processors were key to achieve an efficient convolution algotihm."
    image: /images/works/Vibratio.png
    image_position: "left"
  - title: DSP Specialist at Intellisense
    content: "IntelliSense is a company focused in providing wireless sensing solutions.<br/>I had an important role developing a wireless sensing system using AI and RF. My technical tasks consisted in designing, testing and implementing DSP pipelines in the system."
    image: /images/works/Intellisense.png
    image_position: "right"







---
