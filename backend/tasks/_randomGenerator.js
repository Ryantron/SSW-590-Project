// Helper functions to generate random content
export const generateRandomTitle = () => {
  const adjectives = [
    'Amazing',
    'Incredible',
    'Essential',
    'Surprising',
    'Powerful',
    'Ultimate',
    'Comprehensive',
    'Unexpected',
    'Innovative',
    'Revolutionary',
    'Fascinating',
    'Insightful',
    'Practical',
    'Inspiring',
    'Thought-Provoking',
  ];

  const topics = [
    'Web Development',
    'JavaScript',
    'React',
    'Node.js',
    'TypeScript',
    'Machine Learning',
    'Data Science',
    'UX Design',
    'Remote Work',
    'Productivity',
    'Programming Tips',
    'Technology Trends',
    'Career Advice',
    'Software Architecture',
    'DevOps',
    'Cloud Computing',
    'Mobile Development',
    'Cybersecurity',
    'AI Advancements',
  ];

  const formats = [
    'Guide',
    'Tutorial',
    'Tips',
    'Strategies',
    'Principles',
    'Examples',
    'Methods',
    'Techniques',
    'Patterns',
    'Practices',
    'Insights',
    'Lessons',
    'Steps',
    'Approaches',
    'Solutions',
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  const randomFormat = formats[Math.floor(Math.random() * formats.length)];

  // Generate a few different title formats
  const titleFormats = [
    `${randomAdjective} ${randomTopic} ${randomFormat}`,
    `${randomAdjective} ${randomFormat} for ${randomTopic}`,
    `${randomTopic}: ${randomAdjective} ${randomFormat}`,
    `The ${randomAdjective} Guide to ${randomTopic}`,
    `${randomAdjective} ${randomTopic} You Need to Know About`,
  ];

  return titleFormats[Math.floor(Math.random() * titleFormats.length)];
};

const generateRandomParagraph = () => {
  const sentences = [
    'This approach can significantly improve your development workflow.',
    'Understanding these concepts is crucial for modern software engineering.',
    'Many developers overlook this important aspect of the process.',
    'The key insight here is focusing on simplicity and maintainability.',
    'Best practices suggest a more modular architecture for this problem.',
    'Recent research indicates this method outperforms traditional approaches.',
    'When implementing this pattern, consider the potential performance implications.',
    'This technique can reduce development time by an order of magnitude.',
    'A common misconception is that this process is overly complex.',
    'The fundamental principle behind this approach is separation of concerns.',
    'Looking at the data, we can draw several interesting conclusions.',
    'Experienced developers tend to favor this solution for its elegance.',
    'Several case studies demonstrate the effectiveness of this strategy.',
    'By applying these principles, you can avoid common pitfalls.',
    'This framework provides a solid foundation for scaling your application.',
  ];

  // Generate 5-8 sentences for a paragraph
  const paragraphLength = 5 + Math.floor(Math.random() * 4);
  let paragraph = '';

  for (let i = 0; i < paragraphLength; i++) {
    const randomSentence =
      sentences[Math.floor(Math.random() * sentences.length)];
    paragraph += randomSentence + ' ';
  }

  return paragraph.trim();
};

export const generateRandomContent = () => {
  // Generate 3-6 paragraphs
  const numParagraphs = 3 + Math.floor(Math.random() * 4);
  let content = '';

  for (let i = 0; i < numParagraphs; i++) {
    content += generateRandomParagraph() + '\n\n';
  }

  // Add a conclusion
  const conclusions = [
    'In conclusion, these principles will help you become a more effective developer.',
    "By implementing these strategies, you'll see immediate improvements in your workflow.",
    "As we've explored, this approach offers numerous advantages for modern development.",
    'To summarize, focusing on these key areas will lead to more robust applications.',
    'Moving forward, consider incorporating these ideas into your development process.',
  ];

  content += conclusions[Math.floor(Math.random() * conclusions.length)];
  return content.trim();
};
