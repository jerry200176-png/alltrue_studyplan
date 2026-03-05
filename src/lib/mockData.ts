import { 
  Clock, 
  AlertTriangle, 
  Users, 
  Target, 
  Smartphone, 
  TrendingUp, 
  BookOpen,
  Calendar,
  HelpCircle
} from 'lucide-react';

export const summerCampData = {
  hero: {
    badge: "2024 國二升國三",
    title: "把握暑假黃金逆轉期",
    highlight: "會考衝刺",
    subtitle: "別讓孩子在暑假迷失方向。全真一對一為您打造專屬讀書計畫，嚴格管理作息，精準擊破弱科，讓這個暑假成為成績起飛的關鍵點。",
    cta: "立即預約暑期試讀",
    stats: [
      { label: "剩餘名額", value: "12" },
      { label: "平均進步", value: "35%" },
      { label: "家長滿意", value: "4.9★" }
    ]
  },
  painPoints: [
    {
      id: 1,
      icon: Smartphone,
      title: "作息混亂，手機成癮",
      description: "暑假在家無人管，孩子整天滑手機、日夜顛倒，完全沒有考生該有的規律作息，開學後根本收不回心。"
    },
    {
      id: 2,
      icon: AlertTriangle,
      title: "範圍太大，不知從何複習",
      description: "國一國二內容忘光光，面對國三新進度與會考複習雙重壓力，孩子感到迷茫焦慮，最後選擇逃避。"
    },
    {
      id: 3,
      icon: Users,
      title: "大班制教學，問題沒人解",
      description: "去大型補習班只是「聽課」，聽不懂也不敢問，回家作業還是不會寫，成績依然原地踏步。"
    }
  ],
  features: [
    {
      id: 1,
      icon: Target,
      title: "客製化複習進度",
      description: "不走大鍋飯進度，針對孩子強弱科量身打造專屬複習計畫，強科超前、弱科補強。"
    },
    {
      id: 2,
      icon: Smartphone, // Reusing icon, or could use Lock
      title: "無死角手機管理",
      description: "進班統一保管手機，打造絕對專注的讀書環境，讓孩子真正靜下心來面對書本。"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "精準弱點打擊",
      description: "一對一專業師資貼身指導，直接點出解題盲點，當下解決問題，不把疑問帶回家。"
    },
    {
      id: 4,
      icon: BookOpen,
      title: "安靜專注自習環境",
      description: "提供寬敞舒適且有嚴格管理的自習座位，讀書氛圍濃厚，讓孩子自然融入備考狀態。"
    }
  ],
  schedule: [
    { time: "08:30 - 09:00", activity: "早自習 / 收心點名" },
    { time: "09:00 - 12:00", activity: "一對一學科指導 / 重點複習" },
    { time: "12:00 - 13:30", activity: "午餐 / 午休養精蓄銳" },
    { time: "13:30 - 16:30", activity: "隨堂測驗 / 錯題檢討" },
    { time: "16:30 - 17:30", activity: "自主複習 / 晚餐時間" },
    { time: "17:30 - 21:00", activity: "晚自習 / 班導師解惑" }
  ],
  faq: [
    {
      question: "暑期班如果需要請假怎麼辦？",
      answer: "我們採人性化管理但嚴格執行補課。若有家庭旅遊或病假，需提前告知，我們會協助調整一對一課程時間，確保進度不落後。"
    },
    {
      question: "師資背景是如何挑選的？",
      answer: "全真師資團隊皆來自台大、政大、師大等頂尖學府，並經過嚴格試教篩選，具備豐富的會考輔導經驗與耐心。"
    },
    {
      question: "孩子基礎很差，跟得上嗎？",
      answer: "這正是「一對一」的最大優勢！我們不看全班平均，只看孩子當下的程度。老師會從孩子聽得懂的地方開始教，重建信心。"
    }
  ]
};
