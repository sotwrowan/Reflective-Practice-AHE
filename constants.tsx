
import React from 'react';
import { 
  Users, 
  User, 
  BookOpen, 
  MessageSquare, 
  RefreshCw, 
  Zap, 
  CheckCircle, 
  Search,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Smile,
  Activity,
  ClipboardCheck,
  Lightbulb,
  Route,
  Construction,
  Eye,
  Settings,
  Sparkles
} from 'lucide-react';
import { AppStep, ReadingItem, CreativeExample, PSFDimension } from './types';

export const COLORS = {
  cream: '#faf6ea',
  navy: '#262E3E',
  teal: '#2DD4BF',
  yellow: '#FDE047',
  pink: '#F472B6',
  purple: '#A855F7',
  red: '#FB7185',
  blue: '#60A5FA'
};

export const PSF_AREAS: PSFDimension[] = [
  { code: 'A1', title: 'Design and plan learning activities and/or programmes', description: 'Design and plan learning activities and/or programmes.' },
  { code: 'A2', title: 'Teach and/or support learning through appropriate approaches and environments', description: 'Teach and/or support learning through appropriate approaches and environments.' },
  { code: 'A3', title: 'Assess and give feedback for learning', description: 'Assess and give feedback for learning.' },
  { code: 'A4', title: 'Support and guide learners', description: 'Support and guide learners.' },
  { code: 'A5', title: 'Enhance practice through own continuing professional development', description: 'Enhance practice through own continuing professional development.' }
];

export const PSF_KNOWLEDGE: PSFDimension[] = [
  { code: 'K1', title: 'How learners learn, generally and within specific subjects', description: 'How learners learn, generally and within specific subjects.' },
  { code: 'K2', title: 'Approaches to teaching and/or supporting learning, appropriate for subjects and level of study', description: 'Approaches to teaching and/or supporting learning, appropriate for subjects and level of study.' },
  { code: 'K3', title: 'Critical evaluation as a basis for effective practice', description: 'Critical evaluation as a basis for effective practice.' },
  { code: 'K4', title: 'Appropriate use of digital and/or other technologies, and resources for learning', description: 'Appropriate use of digital and/or other technologies, and resources for learning.' },
  { code: 'K5', title: 'Requirements for quality assurance and enhancement, and their implications for practice', description: 'Requirements for quality assurance and enhancement, and their implications for practice.' }
];

export const PSF_VALUES: PSFDimension[] = [
  { code: 'V1', title: 'Respect individual learners and diverse groups of learners', description: 'Respect individual learners and diverse groups of learners.' },
  { code: 'V2', title: 'Promote engagement in learning and equity of opportunity for all to reach their potential', description: 'Promote engagement in learning and equity of opportunity for all to reach their potential.' },
  { code: 'V3', title: 'Use scholarship, or research, or professional learning, or other evidence-informed approaches as a basis for effective practice', description: 'Use scholarship, or research, or professional learning, or other evidence-informed approaches as a basis for effective practice.' },
  { code: 'V4', title: 'Respond to the wider context in which higher education operates, recognising implications for practice', description: 'Respond to the wider context in which higher education operates, recognising implications for practice.' },
  { code: 'V5', title: 'Collaborate with others to enhance practice', description: 'Collaborate with others to enhance practice.' }
];

export interface ModelDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  criticalReflectiveQuestions: string[];
  psfMapping: string[];
}

export const BROOKFIELD_LENSES: ModelDetail[] = [
  {
    id: 'self',
    title: "AUTOBIOGRAPHY",
    subtitle: "AS LEARNERS AND TEACHERS",
    icon: <User className="w-5 h-5" />,
    color: "bg-teal-100 text-teal-700",
    description: "This lens focuses on our own experiences. Brookfield argues that our actions are based on 'taken-for-granted beliefs'. By reflecting on our history as learners, we gain perspective on power dynamics and the responsible exercise of authority.",
    criticalReflectiveQuestions: [
      "What are the 'taken-for-granted' beliefs about teaching that I have carried since my time as a student?",
      "How do my causal assumptions (what I think will happen) differ from what actually occurs in my classroom?",
      "In what ways might my teaching style be seen by others as an exercise of power rather than a service to learning?",
      "How has my own experience of power dynamics as a learner shaped my current exercise of authority?"
    ],
    psfMapping: ["K1: HOW LEARNERS LEARN", "K3: CRITICAL EVALUATION", "A5: OWN CPD"]
  },
  {
    id: 'students',
    title: "STUDENTS' EYES",
    subtitle: "LEARNER PERCEPTIONS",
    icon: <Users className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-700",
    description: "This lens provides reliable info on how students experience our teaching. It checks our 'meta-assumption' that meanings we ascribe to our actions match student interpretations. Essential for investigating classroom power.",
    criticalReflectiveQuestions: [
      "How do my students interpret specific actions I take, and how does this differ from my own professional intentions?",
      "What are the most 'muddy' or confusing points for my students that I might be overlooking in my delivery?",
      "How can I move from an 'expert' persona to one that genuinely values and acts upon student feedback as critical data?",
      "What 'hidden' resistance or engagement patterns are visible to students but currently invisible to me?"
    ],
    psfMapping: ["V1: RESPECTING LEARNERS", "A4: SUPPORT & GUIDE", "K3: CRITICAL EVALUATION"]
  },
  {
    id: 'peers',
    title: "PEERS' PERCEPTIONS",
    subtitle: "COLLEAGUES' OBSERVATIONS",
    icon: <MessageSquare className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-700",
    description: "Inviting colleagues to watch us or talk helps notice hidden aspects of practice. Peers suggest perspectives we might miss and help navigate situations where we feel 'clueless'.",
    criticalReflectiveQuestions: [
      "What aspects of my practice remain hidden to me but might be immediately obvious to a colleague observing my session?",
      "How does collaborating or team-teaching reveal the specific biases in my own pedagogical approach?",
      "What 'clueless' moments have I experienced that a peer might have an alternative, more effective perspective on?",
      "How can I use shared professional vulnerability with colleagues to overcome my own 'imposter' feelings?"
    ],
    psfMapping: ["V5: COLLABORATION", "A5: CPD", "K5: QA & ENHANCEMENT"]
  },
  {
    id: 'theory',
    title: "SCHOLARSHIP",
    subtitle: "THEORETICAL LITERATURE",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-yellow-100 text-yellow-700",
    description: "Theoretical literature provides unexpected interpretations of familiar situations. It helps see our work in a wider social/political context, influenced by structures of power outside the classroom.",
    criticalReflectiveQuestions: [
      "What hegemonic assumptions am I making that seem to make my life easier but actually work against my students' interests?",
      "How does current educational theory illuminate the power dynamics that exist within my specific discipline?",
      "In what ways does my teaching either challenge or reinforce the dominant ideologies of my institution?",
      "How can I distinguish my purely 'technical' reflections from truly 'critical' reflections on my professional context?"
    ],
    psfMapping: ["V3: SCHOLARSHIP & EVIDENCE", "V4: WIDER CONTEXT", "K2: PEDAGOGY"]
  }
];

export const GIBBS_STAGES: ModelDetail[] = [
  {
    id: 'description',
    title: "DESCRIPTION",
    subtitle: "SETTING THE SCENE",
    icon: <Activity className="w-5 h-5" />,
    color: "bg-yellow-100 text-yellow-700",
    description: "This stage focuses on 'setting the scene' with relevant, to-the-point details. Gibbs emphasizes providing a clear narrative without 'waffling' on unnecessary details to conserve space for higher-level analysis.",
    criticalReflectiveQuestions: [
      "What exactly happened, when did it occur, and who was involved in the interaction?",
      "What were the specific actions taken by myself and others during the event?",
      "What was the immediate outcome of the situation?",
      "How can I describe this event objectively while keeping the focus strictly on relevant pedagogical factors?"
    ],
    psfMapping: ["A2: TEACH & SUPPORT", "V1: RESPECT LEARNERS"]
  },
  {
    id: 'feelings',
    title: "FEELINGS",
    subtitle: "REACTIONS & THOUGHTS",
    icon: <Smile className="w-5 h-5" />,
    color: "bg-gray-100 text-gray-700",
    description: "One of Gibbs' key contributions is the acknowledgement of feelings in reflection. This stage requires an honest but academic discussion of emotions, avoiding 'chatty' or 'diary-like' text.",
    criticalReflectiveQuestions: [
      "How did I feel at the time of the incident, and what was I thinking during the interaction?",
      "What impact did my personal emotions, beliefs, and professional values have on my response?",
      "What do I perceive other people involved were feeling at the time?",
      "How do my thoughts about the incident now differ from my immediate emotional reactions then?"
    ],
    psfMapping: ["V1: RESPECT LEARNERS", "K1: HOW LEARNERS LEARN"]
  },
  {
    id: 'evaluation',
    title: "EVALUATION",
    subtitle: "JUDGING THE EXPERIENCE",
    icon: <ClipboardCheck className="w-5 h-5" />,
    color: "bg-green-100 text-green-700",
    description: "Here you focus on judging the experience. Evaluation requires looking at both the positive and negative aspects, even if the event was primarily one or the other.",
    criticalReflectiveQuestions: [
      "What was objectively good and what was bad about the experience?",
      "What specifically went well, and what parts did not go as planned?",
      "Were my own contributions to the event positive or negative in their effect?",
      "If the incident was difficult, do I feel the situation was adequately resolved afterwards?"
    ],
    psfMapping: ["K3: CRITICAL EVALUATION", "K5: QA & ENHANCEMENT"]
  },
  {
    id: 'analysis',
    title: "ANALYSIS",
    subtitle: "MAKING SENSE WITH THEORY",
    icon: <Search className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-700",
    description: "Analysis is the most important section for higher-level writing. It is where theory and wider context are used to develop a deeper understanding of the event.",
    criticalReflectiveQuestions: [
      "Why did things go well or badly in this specific context?",
      "How can established educational theory or literature explain what happened?",
      "How does my experience compare to what research or professional models suggest?",
      "Could I have responded in a more effective way based on evidence-informed approaches?"
    ],
    psfMapping: ["V3: SCHOLARSHIP & EVIDENCE", "K2: PEDAGOGY", "K3: CRITICAL EVALUATION"]
  },
  {
    id: 'conclusion',
    title: "CONCLUSION",
    subtitle: "LEARNING & REALISATIONS",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-700",
    description: "Gibbs suggests two levels of conclusion: a general one (transferable learning) and a specific one (personal situation). These reveal the realisations that will drive change.",
    criticalReflectiveQuestions: [
      "What have I learnt generally about teaching and specifically about my own practice?",
      "What skills or knowledge could I now apply to handle a similar situation better?",
      "With hindsight, could or should I have done anything differently?",
      "How has this experience fundamentally changed my understanding of my professional role?"
    ],
    psfMapping: ["A5: OWN CPD", "K3: CRITICAL EVALUATION"]
  },
  {
    id: 'action_plan',
    title: "ACTION PLAN",
    subtitle: "FUTURE ENHANCEMENT",
    icon: <Route className="w-5 h-5" />,
    color: "bg-red-100 text-red-700",
    description: "Action plans sum up everything you need to know and do to improve. This is the 'learning by doing' stage where reflection transforms into enhanced practice.",
    criticalReflectiveQuestions: [
      "Where and how can I specifically use my new knowledge and experience in future sessions?",
      "How will I adapt my teaching actions or improve my specific professional skills?",
      "If the same thing happened again, what exactly would I do differently next time?",
      "What specific CPD or training (e.g., workshops) do I need to book to address identified gaps?"
    ],
    psfMapping: ["A5: OWN CPD", "A1: DESIGN & PLAN"]
  }
];

export const SCHON_LENSES: ModelDetail[] = [
  {
    id: 'knowing',
    title: "KNOWING-IN-ACTION",
    subtitle: "TACIT PROFESSIONALISM",
    icon: <Settings className="w-5 h-5" />,
    color: "bg-gray-100 text-gray-700",
    description: "Schön begins with the assumption that competent practitioners usually know more than they can say. This is 'knowing-in-practice', often internalized and spontaneous.",
    criticalReflectiveQuestions: [
      "What are the 'intuitive knowings' that I carry out spontaneously without prior conscious thought?",
      "What tacit norms and appreciations underlie the professional judgements I make in my discipline?",
      "How have I internalized specific understandings into my 'feeling' for the stuff of action?",
      "What 'knowing' does my action reveal that I find difficult to describe in words?"
    ],
    psfMapping: ["K1: HOW LEARNERS LEARN", "K2: PEDAGOGY"]
  },
  {
    id: 'in_action',
    title: "REFLECTION-IN-ACTION",
    subtitle: "THINKING ON YOUR FEET",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-700",
    description: "This is the capacity for reflection on intuitive knowing in the midst of action. It is how practitioners cope with the unique, uncertain, and conflicted situations of practice.",
    criticalReflectiveQuestions: [
      "How am I currently responding to the 'back-talk' of the situation during a teaching interaction?",
      "In what ways am I 'improvising' or varying my approach within the current schema of my lesson?",
      "What 'on-the-spot experiments' am I conducting when faced with surprise or confusion?",
      "How am I reframing the problem as it unfolds to seek a new understanding of the phenomena?"
    ],
    psfMapping: ["A2: TEACH & SUPPORT", "K3: CRITICAL EVALUATION"]
  },
  {
    id: 'on_action',
    title: "REFLECTION-ON-ACTION",
    subtitle: "POST-GAME ANALYSIS",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-indigo-100 text-indigo-700",
    description: "This is a corrective to 'overlearning'. By reflecting after the event, the practitioner can surface and criticize the tacit understandings that have grown up around repetitive experiences.",
    criticalReflectiveQuestions: [
      "How have I framed the problem I was trying to solve, and what alternative frames might exist?",
      "What strategies and theories were implicit in my patterns of behavior during that session?",
      "How did I construct the reality of that interaction, and was it just 'one' version of reality?",
      "How can I turn this specific meeting or event into a 'virtual world' for critical experimentation?"
    ],
    psfMapping: ["A5: OWN CPD", "K5: QA & ENHANCEMENT"]
  }
];

export const ROLFE_STAGES: ModelDetail[] = [
  {
    id: 'what',
    title: "WHAT?",
    subtitle: "DESCRIPTION & ROLE",
    icon: <Search className="w-5 h-5" />,
    color: "bg-teal-100 text-teal-700",
    description: "The first level of Rolfe's model focus on clarity of the event and your specific role within the difficulty or success.",
    criticalReflectiveQuestions: [
      "What exactly was the problem, difficulty, or reason for being 'stuck' in this situation?",
      "What was my specific role in the situation, and what was I trying to achieve?",
      "What specific actions did I take, and what were the consequences for students or others?",
      "What was good or bad about the experience objectively?"
    ],
    psfMapping: ["A2: TEACH & SUPPORT", "V1: RESPECT LEARNERS"]
  },
  {
    id: 'so_what',
    title: "SO WHAT?",
    subtitle: "EVALUATION & THEORY",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-yellow-100 text-yellow-700",
    description: "The second level is about meaning. Rolfe suggests this is the best place to integrate references and justify actions based on evidence.",
    criticalReflectiveQuestions: [
      "What does this teach me or imply about my relationship with my learners or my teaching model?",
      "What other professional knowledge or literature can I bring to help me understand this situation?",
      "What broader issues (e.g., institutional, social) arise from this specific event?",
      "Is my new understanding of the situation based on an evidence-informed approach (V3)?"
    ],
    psfMapping: ["V3: SCHOLARSHIP & EVIDENCE", "K3: CRITICAL EVALUATION"]
  },
  {
    id: 'now_what',
    title: "NOW WHAT?",
    subtitle: "ACTION & CONSEQUENCE",
    icon: <Route className="w-5 h-5" />,
    color: "bg-teal-100 text-teal-700",
    description: "The final level focuses on future practice. It moves from reflection to active improvement of teaching and resolving situations.",
    criticalReflectiveQuestions: [
      "What exactly do I need to do now to make things better or resolve this teaching situation?",
      "What are the potential consequences of my intended future actions?",
      "What broader issues need to be considered if this action is to be successful?",
      "How will these future strategies overcome the specific problems identified in my reflection?"
    ],
    psfMapping: ["A5: OWN CPD", "A1: DESIGN & PLAN", "A4: SUPPORT & GUIDE"]
  }
];

export const KOLB_STAGES: ModelDetail[] = [
  {
    id: 'concrete',
    title: "CONCRETE EXPERIENCE",
    subtitle: "DOING & BEING",
    icon: <Sparkles className="w-5 h-5" />,
    color: "bg-teal-100 text-teal-700",
    description: "Basically 'learning by doing'. Kolb suggests you need to be part of the event. It often stems from a workplace setting or a specific session within your course.",
    criticalReflectiveQuestions: [
      "What exactly was this experience in my professional Higher Education context?",
      "What happened objectively, and what was my specific role during the event?",
      "How did I initially react to encountering something new or challenging?",
      "In what ways was I 'present' and engaged during this pedagogical interaction?"
    ],
    psfMapping: ["A2: TEACH & SUPPORT", "V1: RESPECT LEARNERS"]
  },
  {
    id: 'reflective',
    title: "REFLECTIVE OBSERVATION",
    subtitle: "REVIEWING & THINKING",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-700",
    description: "Taking a step back from the event and thinking deeply. This involves putting the event into context by considering other people's perspectives.",
    criticalReflectiveQuestions: [
      "Why do I think the event unfolded as it did, now that I have taken a step back?",
      "What are the perspectives of others who were there (e.g., students or mentors)?",
      "How did others interpret my actions at the time, and what did they say?",
      "How does all of this new information relate to my own initial understanding?"
    ],
    psfMapping: ["K3: CRITICAL EVALUATION", "V1: RESPECT LEARNERS", "V5: COLLABORATION"]
  },
  {
    id: 'abstract',
    title: "ABSTRACT CONCEPTUALISATION",
    subtitle: "LEARNING FROM THE EXPERIENCE",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-700",
    description: "The ability to make sense of what happened and put it into the context of other experiences, academic literature, and professional guidelines.",
    criticalReflectiveQuestions: [
      "What new information can I find in Higher Education literature to explain this topic?",
      "How does my experience relate to different strands of research or professional legislation?",
      "What do I already know about this type of event that I can now connect to this specific experience?",
      "How can I translate this specific incident into a more general professional concept?"
    ],
    psfMapping: ["V3: SCHOLARSHIP & EVIDENCE", "K2: PEDAGOGY", "V4: WIDER CONTEXT"]
  },
  {
    id: 'active',
    title: "ACTIVE EXPERIMENTATION",
    subtitle: "PLANNING & TESTING",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-pink-100 text-pink-700",
    description: "Considering how this experience has shaped your knowledge and how this will fundamentally change your future HE practice.",
    criticalReflectiveQuestions: [
      "What do I now understand about Higher Education practice that I didn't know before?",
      "What exactly would I do differently if confronted by the same experience tomorrow?",
      "How will I put this specific learning into practice in my next teaching session?",
      "How will this experience systematically change my future professional practice?"
    ],
    psfMapping: ["A1: DESIGN & PLAN", "A5: OWN CPD"]
  }
];

export const CREATIVE_EXAMPLES: CreativeExample[] = [
  {
    role: 'Lecturing',
    title: 'Inclusive Design for High-Stakes Assessment (V2)',
    scenario: 'In my Level 4 Graphic Design module, I identified a significant attainment gap between domestic and international students in the first summative project. The original brief was text-heavy and presumed high levels of western cultural capital (K1). Failure rates were 15% higher in the minoritised group.',
    reflection: 'Using Brookfield’s "Students\' Eyes" lens (K3), I conducted a focus group that revealed the "hidden curriculum" in my project brief. Reflecting on-action (Schön), I realised I had assumed prior knowledge of specific layout software (K4). I redesigned the brief (A1) to include a visual "choice board" for outcomes (V2) and implemented a low-stakes peer-feedback cycle (V5, A3). My latest evaluation (K5) shows failure rates have equalised, demonstrating that inclusive design benefits the entire cohort, not just the target group (V1).'
  },
  {
    role: 'Leadership',
    title: 'Transforming Quality Culture through Peer Review (V5, K5)',
    scenario: 'As Programme Leader, I noticed that student satisfaction with feedback (NSS) was inconsistent across modules. Traditional annual peer observation was seen as a "tick-box" exercise (K5) rather than a genuine tool for enhancement (A5). I faced resistance from senior staff who felt their expertise was being questioned.',
    reflection: 'Applying Gibbs’ cycle to a particularly tense team meeting, I analysed (Analysis stage) the underlying power dynamics using Brookfield’s "Peer Lens". I moved from a top-down model to "Pedagogical Peer Circles" (V5, A5). We shifted the focus from "checking" to "collaborative exploration" of Core Knowledge dimension K3. By using scholarship (V3) on the "Power of Vulnerability," I helped the team see peer review as a shared professional learning opportunity. NSS scores for "Assessment and Feedback" increased by 12% over two cycles (K5).'
  },
  {
    role: 'Professional Services',
    title: 'Modernising the Digital Support Journey (K4, V2)',
    scenario: 'Our Library Services data showed that neurodivergent students were under-utilising digital archive resources (A4). The existing induction was a 60-minute in-person tour that many students described as sensory overloading and difficult to follow (K1). This created an equity gap in resource access (V2).',
    reflection: 'Reflecting through Rolfe’s "So What?", I recognised that a "one-size-fits-all" approach to support was excluding learners (V1). Collaborating with the Disability Support team (V5), I designed and planned (A1) a multimodal digital induction (K4) consisting of short, captioned video "micro-bursts" and a simulated search environment. This provided students with a safe space to experiment (Active Experimentation - Kolb). Student engagement metrics (K5) showed a 40% increase in digital archive logins among students with declared sensory needs (V2, A4).'
  },
  {
    role: 'Technical Services',
    title: 'Sustainable Innovation in Workshop Environments (V4, K4)',
    scenario: 'In our specialist additive manufacturing lab, I observed that students were generating high levels of material waste due to failed prints. Traditional technical support focused on "fixing the machine" (A2) rather than educating the student on the sustainable implications of their digital settings (V4, K4).',
    reflection: 'Using Schön’s reflection-in-action, I adjusted my support approach from purely technical (K2) to pedagogical (A4). I developed a "Pre-Print Reflective Checklist" based on Rolfe’s "What? So What? Now What?". This forced students to consider their digital approaches (K4) and the wider environmental context of their work (V4) before starting a print. I enhanced my own practice (A5) by learning a new slicing algorithm that reduces waste by 20%. This evidence-informed approach (V3) has now been adopted as standard policy for the workshop (K5).'
  }
];

export const PAGE_SPECIFIC_EXAMPLES: Record<number, { title: string; body: string }> = {
  [AppStep.BROOKFIELD]: {
    title: "PSF 2023 CONNECTION: V1, V3, V5",
    body: "Brookfield's lenses allow you to evidence Professional Value V1 (respect individual learners and diverse groups of learners) and V5 (collaborate with others to enhance practice), underpinned by V3 (use scholarship, or research, or professional learning, or other evidence-informed approaches as a basis for effective practice)."
  },
  [AppStep.GIBBS]: {
    title: "PSF 2023 CONNECTION: K3, A5",
    body: "Gibbs provides a rigorous structure for K3 (critical evaluation as a basis for effective practice) which is essential for evidencing A5 (enhance practice through own continuing professional development)."
  },
  [AppStep.SCHON]: {
    title: "PSF 2023 CONNECTION: A2, K2",
    body: "Demonstrating reflection-in-action is key evidence for A2 (teach and/or support learning through appropriate approaches and environments) and shows you apply K2 (approaches to teaching and/or supporting learning, appropriate for subjects and level of study) dynamically."
  },
  [AppStep.ROLFE]: {
    title: "PSF 2023 CONNECTION: A3, A4",
    body: "Rolfe helps clarify A3 (assess and give feedback for learning) and A4 (support and guide learners) by using evaluation (K3) to drive future support strategies."
  },
  [AppStep.KOLB]: {
    title: "PSF 2023 CONNECTION: A1, K1",
    body: "Kolb's cycle informs A1 (design and plan learning activities and/or programmes). By understanding how experience transforms into knowledge (K1: how learners learn, generally and within specific subjects), you design better learning programmes."
  }
};

export const READINGS: ReadingItem[] = [
  {
    id: 1,
    author: "Advance HE",
    year: "2023",
    title: "Professional Standards Framework (PSF) 2023",
    summary: "The current global framework for professional standards in teaching and supporting learning in higher education.",
    url: "https://www.advance-he.ac.uk/knowledge-hub/professional-standards-framework-teaching-and-supporting-learning-higher-education-0"
  },
  {
    id: 2,
    author: "Gibbs, G.",
    year: "1988",
    title: "Learning by Doing",
    summary: "Gibbs focuses on the practicalities of reflective practice, offering examples and strategies for integrating reflection into everyday teaching practices. The text focuses on how reflective practice can enhance student-teacher relationships and foster deeper engagement with content.",
    url: "https://thoughtmostlyaboutlearning.files.wordpress.com/2015/12/learning-by-doing-graham-gibbs.pdf"
  },
  {
    id: 3,
    author: "Miller, B.",
    year: "2010",
    title: "Brookfield's Four Lenses: Becoming a Critically Reflective Teacher",
    summary: "Brookfield argues that the key to discovering the value of one's teaching lies in critical reflection, which enables educators to refine their authentic teaching voices. Proposes four key 'lenses' for critical reflection: Autobiography, Students' Eyes, Peer Review, and Scholarly Literature.",
    url: "https://valenciacollege.edu/faculty/development/courses-resources/documents/brookfield_summary.pdf"
  },
  {
    id: 4,
    author: "Reflective learning",
    year: "2021",
    title: "OpenLearn - Reflective Learning Video",
    summary: "An online video resource providing an introduction to reflective learning practices and their importance in professional development.",
    url: "https://www.open.edu/openlearn/education-development/university-ready/reflective-learning"
  },
  {
    id: 5,
    author: "Schön, D. A.",
    year: "2016",
    title: "The Reflective Practitioner: How Professionals Think in Action",
    summary: "Although slightly older, Schön's work remains foundational for understanding reflective practice in creative professions. Explored ideas on 'reflection-in-action' and 'reflection-on-action'.",
    url: "https://www.sopper.dk/speciale/"
  },
  {
    id: 6,
    author: "University of Cumbria",
    year: "2016",
    title: "Rolfe et al.'s (2001) reflective model",
    summary: "A brief summary and guide on applying the Rolfe reflective model, which is based on three simple questions: What? So What? Now What?",
    url: "https://my.cumbria.ac.uk/media/MyCumbria/Documents/ReflectiveModelRolfe.pdf"
  }
];

export const STEP_METADATA = [
  { step: AppStep.INTRO, label: "WELCOME" },
  { step: AppStep.PSF_2023, label: "PSF 2023 FRAMEWORK" },
  { step: AppStep.BROOKFIELD, label: "BROOKFIELD" },
  { step: AppStep.GIBBS, label: "GIBBS" },
  { step: AppStep.SCHON, label: "SCHÖN" },
  { step: AppStep.ROLFE, label: "ROLFE" },
  { step: AppStep.KOLB, label: "KOLB" },
  { step: AppStep.EXAMPLES, label: "CASE STUDIES" },
  { step: AppStep.AI_LAB, label: "PRACTISE LAB" },
  { step: AppStep.RESOURCES, label: "REFERENCES" },
];
