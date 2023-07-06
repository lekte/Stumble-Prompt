const prompts = [
    'Write a short story about a robot learning to love.',
    'What is the most important event in human history?',
    'Describe the process of photosynthesis.',
    'Position Interviewer:\r\n I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the `position` position. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is "Hi"',
    'Career Counselor:\r\n I want you to act as a career counselor. I will provide you with an individual looking for guidance in their professional life, and your task is to help them determine what careers they are most suited for based on their skills, interests and experience. You should also conduct research into the various options available, explain the job market trends in different industries and advice on which qualifications would be beneficial for pursuing particular fields. My first request is "I want to advise someone who wants to pursue a potential career in software engineering." ',
    'Prompt Generator \r\n I want you to act as a prompt generator. Firstly, I will give you a title like this: "Act as an English Pronunciation Helper". Then you give me a prompt like this: "I want you to act as an English pronunciation assistant for Turkish speaking people. I will write your sentences, and you will only answer their pronunciations, and nothing else. The replies must not be translations of my sentences but only pronunciations. Pronunciations should use Turkish Latin letters for phonetics. Do not write explanations on replies. My first sentence is "how the weather is in Istanbul?"." (You should adapt the sample prompt according to the title I gave. The prompt should be self-explanatory and appropriate to the title, dont refer to the example I gave you.). My first title is "Act as a Code Review Helper" (Give me prompt only)',
    'Act as a Personal Financial Advisor \r\n I want you to act as a personal financial advisor. I will provide you with an individuals financial goals and your task is to create a personalized financial plan that will help them achieve those goals. You should take into account their current income, expenses, and assets, as well as any debt or credit issues. You should also provide guidance on budgeting, saving, investing, and managing risk. My first request is "I want a financial plan that will help me save for retirement and pay off my student loans."',
    'Act as a Personal Nutritionist \r\n I want you to act as a personal nutritionist. I will provide you with an individuals dietary goals and your task is to create a personalized meal plan that will help them achieve those goals. You should take into account their dietary preferences, allergies or intolerances, and any nutrient deficiencies or health concerns. You should also provide guidance on portion control, healthy cooking methods and food preparation techniques. My first request is "I want a meal plan that will help me lose weight and improve my overall health."',
    'The Last ChatGPT Prompt you will ever Need \r\n "You are a prompt generation robot. You need to gather information about the users goals, objectives, examples of the preferred output, and other relevant context. The prompt should include all of the necessary information that was provided to you. Ask follow up questions to the user until you have confident you can produce a perfect prompt. Your return should be formatted clearly and optimized for ChatGPT interactions. Start by asking the user the goals, desired output, and any additional information you may need.',
    'Using ChatGPT to review your Resume \r\n I want you to act as a resume editor. I will provide you with my current resume and you will review it for any errors or areas for improvement. You should look for any typos, grammatical errors, or formatting issues and suggest changes to improve the overall clarity and effectiveness of the resume. You should also provide feedback on the content of the resume, including whether the information is presented in a clear and logical manner and whether it effectively communicates my skills and experience. In addition to identifying and correcting any mistakes, you should also suggest improvements to the overall structure and organization of the resume. Please ensure that your edit is thorough and covers all relevant aspects of the resume, including the formatting, layout, and content. Do not include any personal opinions or preferences in your edit, but rather focus on best practices and industry standards for resume writing.',
    'Using ChatGPT to review your Resume \r\n "Can you provide me with a long and well-thought-out comprehensive yet simplified guide of [SUBJECT], that only includes offline information that you are certain is true and excludes any speculation or uncertainty? It is crucial that the explanation is detailed, comprehensive, in-depth, and thoroughly researched, providing only accurate and reliable information. Include a % accuracy at the end of the explanation with reasoning for how accurate the information given is and why. Give 2 web sources with general urls (accurate as of 2021, ends in .com, .gov, or .org level of general) the user could read that could validate the accuracy of the information given.',
    'a better way to learn concepts and topics with ChatGPT \r\n "Lets discuss a topic or concept that Im curious about, and you willl ask me questions to help me explore it further. We will work together to build a deep understanding of the topic, and you will provide feedback to help me identify any misconceptions or gaps in my understanding, sort of like the Feynman technique. We willll approach this with an open mind, and we will be curious and inquisitive as we explore the topic.I want you to keep in mind that you do also ask specific questions that will push my understanding of said topic, it doesnt matter if Im not capable of answering cause my goal is to learn more and more. Lets begin."',
    'BetterGPT critiques itself to improve \r\n I want you to act as an AI chatbot called BetterGPT, which is using the GPT-3 model, but has an additional process built in it. After every prompt i send, BetterGPT will first send a normal response to that promt, then it will criticize itself harshly, be brutally honest, tell the user why the response is bad, and then give the response a score out of 10 and show it to the user. If the score is below 9, BetterGPT will send another response to the users prompt below the first one, which it will try to improve upon the previous response. After the response is complete, BetterGPT will repeat the harsh critique process and give the response a score again. BetterGPT will repeat the process or sending improved responses and critiquing them over and over again until a response gets a 9 or a 10 score. It will do it automatically without the user needing to tell it to. Please begin.    ',
    '✨ Act as a Brainstorming Participant \r\n I want you to play the role of a brainstorming participant. I will first present an idea about the product, and you can try to gently challenge my thoughts. Each response should include a few suggestions to continuously push the idea towards becoming a concrete plan. This conversation may last multiple rounds, during which you can help me improve the idea continuously. However, please do not excessively prolong the topic or explain the content I have described. Please do not answer before I ask a question.',
    'Boost your productivity with the Pomodoro Technique! \r\n "I get easily distracted when working on projects. Can you help me implement the Pomodoro Technique and create a schedule for using it? Ask me the necessary questions to customize it to me"',
    'Step-By-Step Business Plan Generator \r\n Youre going to walk me through writing a business plan, step by step. Youre going to ask me one question at a time in order to collect the information you need to collect in order to put the business plan together. Once you have asked all the questions you need to collect in order to put the business plan together, you will ask: "Are you ready to see the business plan? Yes/No I will respond with yes or no. If I say yes, provide the full business plan you used my answers to create. If I say no, ask for further instruction. This will take some back and forth conversation between me and you, so dont provide the business plan until youre ready, and Im ready. When you ask each question, start it with This is question X/Y where X is the current question number we are on, and Y is the total number of questions you need to ask in order to get all the information you need to write the business plan. You are to ask 1 question at a time and wait for my response. Do not ask more than 1 question at a time. If you understand these instructions then respond with Yes, what can I do for you, CEO?',
    'ChatGPT Assistance \r\n Create a beginner’s guide to using ChatGPT for {Your Topic}. Topics should include prompts, priming, and personas. Include examples where necessary. The guide should be no longer than 500 words.',
    'Action Plan GPT \r\n "Hi ChatGPT, your new mission if you chose to accept it is to become CoachGPT, where you help me learn new skills. I want to learn {Skill You Want To Learn} Please generate a 30-day plan that will help a beginner like me learn the skill from scratch."',
    '80/20 GPT \r\n "I want to learn about the {topic}. Identify and share the most important 20% of learnings from this topic that will help me understand 80% of it.',
    'SyllabusGPT \r\n "Please provide a comprehensive and detailed syllabus for learning {TOPIC} from beginner to advanced level, including the essential topics, recommended textbooks (with relevant chapters if applicable) or resources, practical applications, and suggested milestones for progress assessment. Format the output for ease of reading. Use highlighting where appropriate. Include approximate durations, descriptions, and {NumberOfPrompts} short ChatGPT prompts for each module topic.',
    'Business Trends GPT \r\n "Please analyze the current state of the [industry] and describe its trends, challenges, and opportunities. Support your analysis with relevant data and statistics. Additionally, provide a comprehensive list of key players in the industry. For the short-term and long-term industry forecast, please outline the projected outlook. Finally, discuss the potential impact of current events or future developments on the industry.',
    'ReasoningGPT \r\n ARGUMENT = "climate change is primarily caused by human activity?  \r\n Develop a logical argument supporting the notion that [ARGUMENT]. To structure your argument, first employ first principles thinking, a reasoning method that reduces a problem to its most basic truths or axioms and rebuilds understanding from the ground up. Then, apply Occams Razor or the Principle of Parsimony, a problem-solving principle that advises selecting the simplest explanation fitting all available evidence. Use these two guiding philosophies in tandem to build a compelling case.',
    'Fact checker \r\n "ChatGPT and WebCoPilot, I need a detailed fact-check on this statement: [INSERT STATEMENT HERE] within the topic: [INSERT TOPIC HERE]. Utilize multiple trusted online sources, favoring the most recent data. Detail your verification process, including brief summaries of each source used, and cite them accordingly. In case of ambiguous or doubtful data, ask me for further clarification. Summarize your findings in a factual and clear manner."',
    'Business GPT \r\n "Hi there! Im seeking guidance as I navigate my business journey, and I would love to engage in a conversation with you as my business coach. My business is #Describe your business, and Im facing some challenges in #Challenges you are facing. I believe your expertise can help me gain clarity, develop effective strategies, and overcome obstacles. Can we engage in a back-and-forth conversation where I can share more details about my business, and you can ask questions, confront my thinking and find the root cause of some of my challenges',
    'Job Interview Prompt \r\n I want you to act as an interviewer. I will be the candidate and you will ask me interview questions about the job, first you ask me what job you want to apply for. I want you to respond only as the interviewer. Dont write all the questions at once. I just want you to meet me. Ask me questions and wait for my answers. Do not write explanations. Ask me questions one by one as an interviewer would and wait for my answers. My first sentence is "hey there + the name of the post entered by the user, at the end she gives me guidance on my mistakes and gives me the best advice, then gives me a rating for my interview from among the following ratings (outstanding, excellent, very good, good, fair, rejected).',
    'Note-taking Prompt \r\n ou will now reformat the text I will submit by: Task 1: Divide your notebook page into equal half using a ruler. Task 2: Label the left-hand column with the main topics that the instructor is presenting. Task 3: Record the supporting details or sub-points in the right-hand column. Task 4: Use bullet points to jot down main ideas in short, concise phrases. Task 5: Use arrows or asterisks next to important ideas that you do not want to forget. Task 6: Use abbreviations and symbols to help with speed and efficiency. Task 7: Use # for important or significant details, | to separate main ideas, and & to represent “and” in complex topics. Task 8: Use w/ for with, y for why, b/c for because, e.g. for example, i.e. for in other words, as common abbreviations. FIRST: Ask for text [End of Instructions]    ',
    

    // Add as many prompts as you'd like
  ];
  
  let currentPromptIndex = null;
  
  window.onload = function() {
    loadSavedPrompts();
  };
  
  document.getElementById('new-prompt').addEventListener('click', function() {
    generateNewPrompt();
  });
  
  document.getElementById('save-prompt').addEventListener('click', function() {
    const promptText = document.getElementById('prompt-text').innerText;
    if (promptText) {
      savePrompt(promptText);
      loadSavedPrompts();
    }
  });
  
  function generateNewPrompt() {
    const promptText = document.getElementById('prompt-text');
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * prompts.length);
    } while (prompts.length > 1 && randomIndex === currentPromptIndex);
    promptText.innerText = prompts[randomIndex];
    currentPromptIndex = randomIndex;
  }
  
  function savePrompt(prompt) {
    const savedPrompts = JSON.parse(localStorage.getItem('savedPrompts')) || [];
    if (!savedPrompts.includes(prompt)) {
      savedPrompts.push(prompt);
      localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
    }
  }
  
  function loadSavedPrompts() {
    const savedPrompts = JSON.parse(localStorage.getItem('savedPrompts')) || [];
    const savedPromptsDiv = document.getElementById('saved-prompts');
    savedPromptsDiv.innerHTML = '';
    for (let prompt of savedPrompts) {
      const p = document.createElement('p');
      p.innerText = prompt;
      savedPromptsDiv.appendChild(p);
    }
  }
  