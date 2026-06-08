import type { SurveySection } from "../types/survey";

export const ratingOptions = [
  { value: "very-poor", label: "سيء" },
  { value: "poor", label: "ضعيف" },
  { value: "fair", label: "مقبول" },
  { value: "good", label: "جيد" },
  { value: "very-good", label: "جيد جداً" },
];

export const yesNoOptions = [
  { value: "yes", label: "نعم" },
  { value: "no", label: "لا" },
];

export const waitingDurationOptions = [
  { value: "0-10", label: "من 0 إلى 10 دقائق" },
  { value: "10-20", label: "من 10 إلى 20 دقيقة" },
  { value: "30-40", label: "من 30 إلى 40 دقيقة" },
  { value: "50-more", label: "50 دقيقة فأكثر" },
];

export const lowRatingValues = ["very-poor", "poor"];

export function getWaitingDurationAnswerId(questionId: string) {
  return `${questionId}_waiting_duration`;
}

export function shouldShowWaitingDuration(answerValue?: string) {
  return Boolean(answerValue && lowRatingValues.includes(answerValue));
}

export const surveySections: SurveySection[] = [
  {
    id: "basic",
    title: "أسئلة أساسية",
    subtitle: "معلومات عامة قبل تقييم تجربة غسيل الكلى",
    questions: [
      {
        id: "respondent_type",
        text: "من الذي يقوم بالإجابة على هذا الاستبيان؟",
        type: "choice",
        required: true,
        options: [
          { value: "patient", label: "المريض" },
          { value: "parent_guardian", label: "أحد الوالدين / المسؤول عن رعاية المريض" },
          { value: "other", label: "شخص آخر" },
        ],
      },
    ],
  },
  {
    id: "registration",
    title: "التسجيل",
    subtitle: "تقييم تجربة مكتب التسجيل وسهولة الإجراءات ومدة الانتظار",
    questions: [
      { id: "registration_staff_helpfulness", text: "مساعدة الشخص لك عند مكتب التسجيل", type: "rating", required: true },
      { id: "registration_process_ease", text: "سهولة عملية التسجيل", type: "rating", required: true },
      { id: "registration_waiting_time", text: "فترة الانتظار للتسجيل", type: "rating", required: true, waitingDurationOnLowRating: true },
      { id: "registration_comments", text: "تعليقات: صف التجارب الجيدة أو السيئة", type: "textarea", required: false },
    ],
  },
  {
    id: "facility",
    title: "المرافق",
    subtitle: "تقييم الراحة وسهولة الوصول ونظافة المكان",
    questions: [
      { id: "waiting_area_comfort", text: "الراحة في منطقة الانتظار", type: "rating", required: true },
      { id: "wayfinding_ease", text: "سهولة إيجاد ومعرفة طريقك", type: "rating", required: true },
      { id: "area_cleanliness", text: "نظافة المكان", type: "rating", required: true },
      { id: "facility_comments", text: "تعليقات: صف التجارب الجيدة أو السيئة", type: "textarea", required: false },
    ],
  },
  {
    id: "dialysis_experience",
    title: "تجربتك مع غسيل الكلى",
    subtitle: "تقييم متابعة الطاقم الطبي والتعليمات والقدرة على السؤال والاستفسار",
    questions: [
      { id: "dialysis_care_monitoring", text: "مراقبة الطاقم الطبي لعملية غسيل الكلى", type: "rating", required: true },
      { id: "dialysis_access_instructions", text: "التعليمات التي قدمها لك الطاقم الطبي عن كيفية العناية بمدخل الغسيل", type: "rating", required: true },
      { id: "dialysis_questions_opportunity", text: "مدى توفير الفرصة للسؤال والاستفسار عن عملية غسيل الكلى", type: "rating", required: true },
      { id: "dialysis_home_complications_instructions", text: "التعليمات المقدمة لك عن كيفية التصرف في حالات المضاعفات المتعلقة بغسيل الكلى في المنزل", type: "rating", required: true },
      { id: "dialysis_experience_comments", text: "تعليقات: صف التجارب الجيدة أو السيئة", type: "textarea", required: false },
    ],
  },
  {
    id: "pharmacy",
    title: "الصيدلية",
    subtitle: "هذا القسم يظهر حسب صرف الأدوية من صيدلية الوحدة",
    questions: [
      { id: "pharmacy_received", text: "هل صرفت أدويتك من صيدلية الوحدة؟", type: "yesNo", required: true },
      { id: "pharmacy_explanations", text: "الشرح المقدم من الصيدلي عن الوصفات الطبية", type: "rating", required: true, showIf: { questionId: "pharmacy_received", equals: "yes" } },
      { id: "pharmacy_medication_availability", text: "توفر الأدوية الموصوفة", type: "rating", required: true, showIf: { questionId: "pharmacy_received", equals: "yes" } },
      { id: "pharmacy_overall_rating", text: "التقييم العام لخدمات الصيدلية", type: "rating", required: true, showIf: { questionId: "pharmacy_received", equals: "yes" } },
      { id: "pharmacy_comments", text: "تعليقات: صف التجارب الجيدة أو السيئة", type: "textarea", required: false, showIf: { questionId: "pharmacy_received", equals: "yes" } },
    ],
  },
  {
    id: "personal_issues",
    title: "أمور شخصية",
    subtitle: "تقييم الخصوصية والاستجابة للاحتياجات والتعامل مع الشكاوى",
    questions: [
      { id: "privacy_concern", text: "مراعاتنا لخصوصيتك", type: "rating", required: true },
      { id: "needs_sensitivity", text: "مدى استجابتنا لاحتياجاتك", type: "rating", required: true },
      { id: "complaints_response", text: "الاستجابة للمخاوف والشكاوى التي أعربت عنها خلال زيارتك", type: "rating", required: true },
      { id: "personal_issues_comments", text: "تعليقات: صف التجارب الجيدة أو السيئة", type: "textarea", required: false },
    ],
  },
  {
    id: "overall",
    title: "التقييم العام",
    subtitle: "تقييمك النهائي لتجربة الرعاية وخدمات غسيل الكلى",
    questions: [
      { id: "staff_teamwork", text: "مدى تعاون الموظفين لتقديم الرعاية", type: "rating", required: true },
      { id: "overall_care_rating", text: "التقييم العام للرعاية الطبية المقدمة لك", type: "rating", required: true },
      { id: "recommend_likelihood", text: "احتمالية أن توصي بخدماتنا للآخرين", type: "rating", required: true },
      { id: "overall_comments", text: "تعليقات: صف التجارب الجيدة أو السيئة", type: "textarea", required: false },
    ],
  },
];
