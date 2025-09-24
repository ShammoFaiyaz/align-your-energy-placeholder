import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "What is energy healing and how does it work?",
      answer: "Energy healing is a holistic practice that works with the body's natural energy systems to promote healing and balance. It's based on the understanding that we all have a life force energy (called chi, prana, or ki in different traditions) that flows through our bodies. When this energy becomes blocked or imbalanced, it can manifest as physical, emotional, or spiritual issues. Energy healing helps to restore the natural flow of this energy, allowing the body's own healing mechanisms to function optimally."
    },
    {
      question: "What can I expect during my first session?",
      answer: "Your first session will begin with a consultation where we discuss your health history, current concerns, and healing goals. I'll explain the process and answer any questions you have. During the actual healing session, you'll lie comfortably fully clothed while I work with your energy field using gentle touch or hands-off techniques. Many people experience deep relaxation, warmth, tingling sensations, or emotional releases. After the session, we'll discuss what came up and I'll provide any guidance or homework for your continued healing journey."
    },
    {
      question: "How effective is distance/remote healing?",
      answer: "Distance healing is just as effective as in-person sessions. Energy is not bound by physical space or time - it transcends these limitations. During a distance session, you'll be in your own comfortable space while I connect with your energy field remotely. Many clients report feeling the energy work happening in real-time, experiencing sensations, emotional releases, or insights during the session. The healing outcomes are identical to in-person work."
    },
    {
      question: "How many sessions will I need?",
      answer: "The number of sessions varies depending on your individual needs, goals, and how your body responds to the healing. Some people experience significant shifts after just one session, while others benefit from a series of treatments. Generally, I recommend starting with 3-4 sessions to allow for deeper healing patterns to emerge and integrate. We'll assess your progress together and adjust the treatment plan as needed. Many clients also choose to have maintenance sessions once a month or seasonally."
    },
    {
      question: "Is energy healing safe? Are there any side effects?",
      answer: "Energy healing is completely safe and non-invasive. It works with your body's natural healing processes and cannot cause harm. However, as your energy begins to shift and rebalance, you may experience what's called a 'healing response.' This can include temporary fatigue, emotional releases, vivid dreams, or slight detox symptoms as your body releases what no longer serves you. These responses are normal and typically resolve within 24-48 hours. I always provide aftercare guidance to support you through this process."
    },
    {
      question: "Do I need to believe in energy healing for it to work?",
      answer: "While having an open mind can enhance your experience, belief is not required for energy healing to be effective. Energy healing works on a subtle level that transcends the conscious mind. Even skeptical clients often report positive changes after sessions. What's most important is your willingness to receive healing and be open to the process. Children and animals respond beautifully to energy work, and they certainly don't have preconceived notions about how it should work."
    },
    {
      question: "Can energy healing replace medical treatment?",
      answer: "Energy healing is a complementary therapy that works wonderfully alongside conventional medical treatment, but it should not replace necessary medical care. I always recommend that clients continue working with their healthcare providers and follow their medical advice. Energy healing can enhance your body's natural healing processes, reduce stress, and support your overall wellbeing as you navigate health challenges. Many healthcare providers now recognize the benefits of integrative approaches to healing."
    },
    {
      question: "What should I do to prepare for a session?",
      answer: "To prepare for your session, wear comfortable, loose-fitting clothing and avoid caffeine for a few hours beforehand. Come with an open mind and clear intention about what you'd like to receive from the healing. It's helpful to be well-hydrated and avoid large meals right before the session. If it's a distance session, create a quiet, comfortable space where you won't be disturbed. Set your phone to silent and perhaps light a candle or play soft music to enhance the healing environment."
    },
    {
      question: "What should I do after a healing session?",
      answer: "After your session, drink plenty of water to help your body integrate the energy shifts and release any toxins. Rest if you feel tired - this is your body's way of integrating the healing. Avoid alcohol and try to eat light, nourishing foods. Pay attention to any dreams, insights, or emotions that arise over the next few days, as these can provide valuable information about your healing process. Gentle activities like walking in nature, journaling, or meditation can support the integration process."
    },
    {
      question: "How do I know if energy healing is right for me?",
      answer: "Energy healing can benefit anyone who is open to holistic approaches to wellness. It's particularly helpful if you're dealing with stress, anxiety, emotional blocks, chronic pain, sleep issues, or feeling stuck in life patterns. It's also wonderful for those on a spiritual growth journey or seeking deeper self-understanding. If you're curious about energy work and feel drawn to explore it, that's often a sign that it could be beneficial for you. I offer brief consultations if you'd like to discuss whether energy healing aligns with your needs and goals."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Find answers to common questions about energy healing, sessions, 
            and what to expect on your healing journey.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 shadow-soft bg-card"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            I'm here to help you feel comfortable and informed about your healing journey. 
            Feel free to reach out with any questions not covered here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
            >
              <Link to="/contact">Ask a Question</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;