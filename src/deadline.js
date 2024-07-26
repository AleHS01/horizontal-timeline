const brainstorming = "#8ecae6";
const drafting = "#219ebc";
const reviewing = "#023047";
const finalizing = "#2a9d8f";
const submitting = "#03045e";
const resting = "#60A5FA";

const deadline_data = [
  {
    month: "August",
    items: [
      {
        deadline: "August 1",
        description:
          "Brainstorm and outline ideas for Theme 1: Academic Interests and Excitement about Learning for Stanford, Princeton, Yale, Purdue, and Harvard.",
        bgColor: brainstorming,
      },
      {
        deadline: "August 4",
        description: "Draft essays for Theme 1 for Stanford and Princeton.",
        bgColor: drafting,
      },
      {
        deadline: "August 8",
        description: "Draft essays for Theme 1 for Yale, Purdue, and Harvard.",
        bgColor: drafting,
      },
      {
        deadline: "August 11",
        description:
          "Brainstorm and outline ideas for Theme 2: Personal Background and Impact on College Community for Stanford, Princeton, Yale, and Harvard.",
        bgColor: brainstorming,
      },
      {
        deadline: "August 15",
        description: "Draft essays for Theme 2 for Stanford and Princeton.",
        bgColor: drafting,
      },
      {
        deadline: "August 18",
        description: "Draft essays for Theme 2 for Yale and Harvard.",
        bgColor: drafting,
      },
      {
        deadline: "August 22",
        description:
          "Brainstorm and outline ideas for Theme 3: Extracurricular Activities and Leadership for Stanford, UC, and Harvard.",
        bgColor: brainstorming,
      },
      {
        deadline: "August 25",
        description: "Draft essays for Theme 3 for Stanford and UC.",
        bgColor: drafting,
      },
      {
        deadline: "August 29",
        description: "Review and revise drafts for Theme 1.",
        bgColor: reviewing,
      },
    ],
  },
  {
    month: "September",
    items: [
      {
        deadline: "September 1",
        description: "Draft essays for Theme 3 for Harvard.",
        bgColor: drafting,
      },
      {
        deadline: "September 4",
        description:
          "Brainstorm and outline ideas for Theme 4: Overcoming Challenges for Stanford, UC, and Purdue.",
        bgColor: brainstorming,
      },
      {
        deadline: "September 8",
        description: "Draft essays for Theme 4 for Stanford and UC.",
        bgColor: drafting,
      },
      {
        deadline: "September 11",
        description: "Draft essays for Theme 4 for Purdue.",
        bgColor: drafting,
      },
      {
        deadline: "September 15",
        description:
          "Brainstorm and outline ideas for Theme 5: Unique Contributions and Community Impact for Stanford, UC, Yale, and Harvard.",
        bgColor: brainstorming,
      },
      {
        deadline: "September 18",
        description: "Draft essays for Theme 5 for Stanford and UC.",
        bgColor: drafting,
      },
      {
        deadline: "September 21",
        description: "Draft essays for Theme 5 for Yale and Harvard.",
        bgColor: drafting,
      },
      {
        deadline: "September 25",
        description:
          "Brainstorm and outline ideas for Theme 6: Creative and Personal Expression for UC, Princeton, Yale, and Harvard.",
        bgColor: brainstorming,
      },
      {
        deadline: "September 28",
        description: "Draft essays for Theme 6 for UC and Princeton.",
        bgColor: drafting,
      },
    ],
  },
  {
    month: "October",
    items: [
      {
        deadline: "October 1",
        description: "Draft essays for Theme 6 for Yale and Harvard.",
        bgColor: drafting,
      },
      {
        deadline: "October 4",
        description: "Review and revise drafts for Theme 2 and Theme 3.",
        bgColor: reviewing,
      },
      {
        deadline: "October 8",
        description:
          "Brainstorm and outline ideas for Theme 7: Interests and Passions for UC, Princeton, Yale, and Harvard.",
        bgColor: brainstorming,
      },
      {
        deadline: "October 11",
        description: "Draft essays for Theme 7 for UC and Princeton.",
        bgColor: drafting,
      },
      {
        deadline: "October 15",
        description: "Draft essays for Theme 7 for Yale and Harvard.",
        bgColor: drafting,
      },
      {
        deadline: "October 18",
        description: "Review and revise drafts for Theme 4 and Theme 5.",
        bgColor: reviewing,
      },
      {
        deadline: "October 22",
        description:
          "Brainstorm and outline ideas for Theme 8: Historical Moments and Influence for Stanford and Yale.",
        bgColor: brainstorming,
      },
      {
        deadline: "October 25",
        description: "Draft essays for Theme 8 for Stanford and Yale.",
        bgColor: drafting,
      },
      {
        deadline: "October 28",
        description: "Review and revise drafts for Theme 6 and Theme 7.",
        bgColor: reviewing,
      },
    ],
  },
  {
    month: "November",
    items: [
      {
        deadline: "November 1",
        description: "Submit Stanford application.",
        bgColor: submitting,
      },
      {
        deadline: "November 2",
        description:
          "Brainstorm and outline ideas for Theme 9: Future Aspirations for Princeton, Yale, and Harvard.",
        bgColor: brainstorming,
      },
      {
        deadline: "November 5",
        description:
          "Draft essays for Theme 9 for Princeton, Yale, and Harvard.",
        bgColor: drafting,
      },
      {
        deadline: "November 8",
        description:
          "Brainstorm and outline ideas for Theme 10: Short Answer Personal Insights for Stanford, Yale, and Harvard.",
        bgColor: brainstorming,
      },
      {
        deadline: "November 11",
        description:
          "Draft essays for Theme 10 for Stanford, Yale, and Harvard.",
        bgColor: drafting,
      },
      {
        deadline: "November 15",
        description: "Review and revise drafts for Theme 8 and Theme 9.",
        bgColor: reviewing,
      },
      {
        deadline: "November 18",
        description: "Review and revise drafts for Theme 10.",
        bgColor: reviewing,
      },
      {
        deadline: "November 22",
        description: "Final review and revisions for UC essays.",
        bgColor: finalizing,
      },
      {
        deadline: "November 26",
        description: "Submit UC application.",
        bgColor: submitting,
      },
    ],
  },
  {
    month: "December",
    items: [
      {
        deadline: "December 1",
        description: "Review and revise all drafts for Princeton.",
        bgColor: reviewing,
      },
      {
        deadline: "December 4",
        description: "Review and revise all drafts for Yale.",
        bgColor: reviewing,
      },
      {
        deadline: "December 8",
        description: "Review and revise all drafts for Harvard.",
        bgColor: reviewing,
      },
      {
        deadline: "December 11",
        description:
          "Final review and polishing of essays for Princeton, Yale, and Harvard.",
        bgColor: finalizing,
      },
      {
        deadline: "December 15",
        description:
          "Seek feedback from teachers or mentors on Princeton, Yale, and Harvard essays.",
        bgColor: finalizing,
      },
      {
        deadline: "December 18",
        description: "Incorporate feedback and make final edits.",
        bgColor: finalizing,
      },
      {
        deadline: "December 22",
        description:
          "Finalize and prepare submissions for Princeton, Yale, and Harvard.",
        bgColor: finalizing,
      },
      {
        deadline: "December 25",
        description: "Rest and prepare for submission.",
        bgColor: resting,
      },
    ],
  },
  {
    month: "January",
    items: [
      {
        deadline: "January 1",
        description: "Submit Princeton and Harvard applications.",
        bgColor: submitting,
      },
      {
        deadline: "January 2",
        description: "Submit Yale application.",
        bgColor: submitting,
      },
      {
        deadline: "January 3",
        description: "Review and revise all drafts for Purdue.",
        bgColor: reviewing,
      },
      {
        deadline: "January 8",
        description: "Seek feedback from teachers or mentors on Purdue essays.",
        bgColor: finalizing,
      },
      {
        deadline: "January 11",
        description:
          "Incorporate feedback, make final edits, and submit Purdue application.",
        bgColor: finalizing,
      },
    ],
  },
];

export default deadline_data;
