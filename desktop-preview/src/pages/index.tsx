import NewsLetterSignup from "@/app/components/NewsLetterSignup";

export default function Home() {
  const handleSubscribe =  async (email: string) => { 
    console.log("Subscribed with email:", email)
  }
  return (
    <NewsLetterSignup onSubscribe={handleSubscribe} />
  );
}
