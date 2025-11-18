# 📘 TypeScript Blog Post (বাংলা)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?logo=markdown&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)

নিচে TypeScript এর ২টি গুরুত্বপূর্ণ প্রশ্নের সহজ ও বিস্তারিত ব্যাখ্যা দেওয়া হলো।

---

## 📑 Table of Contents
- [প্রশ্ন ১: Interface এবং Type এর পার্থক্য](#-প্রশ্ন-১-typescript-এ-interface-এবং-type-এর-মধ্যে-কী-পার্থক্য)
- [প্রশ্ন ২: `keyof` কীওয়ার্ডের ব্যবহার](#-প্রশ্ন-২-typescript-এ-keyof-কীওয়ার্ডের-ব্যবহার-কী)
- [উপসংহার](#-উপসংহার)

---

## 📝 প্রশ্ন ১: TypeScript এ Interface এবং Type এর মধ্যে কী পার্থক্য?

TypeScript এ **interface** এবং **type** দুটিই অবজেক্টের স্ট্রাকচার নির্ধারণ করতে ব্যবহৃত হয়,  
তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে:

---

### ✅ 1. Declaration Merging

**interface** বারবার একই নামে ডিফাইন করলে merge হয়ে যায়।  
**type** কখনোই merge হয় না।

```ts
// interface merging example
interface User {
  name: string;
}

interface User {
  age: number;
}

// Result: { name: string; age: number }
