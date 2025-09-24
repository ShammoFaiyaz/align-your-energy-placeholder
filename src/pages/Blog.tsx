import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Understanding Energy Healing: A Beginner's Guide",
      excerpt: "Discover the fundamental principles of energy healing and how it can transform your life. Learn about different modalities and what to expect from your first session.",
      author: "Neda Javan",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Healing Basics",
      featured: true
    },
    {
      title: "The Seven Chakras: Your Energy Centers Explained",
      excerpt: "Explore the seven main chakras, their meanings, and how balanced chakras contribute to physical, emotional, and spiritual wellbeing.",
      author: "Neda Javan",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Chakras"
    },
    {
      title: "Distance Healing: How Energy Transcends Physical Space",
      excerpt: "Learn about the science and spirituality behind distance healing and why physical proximity isn't necessary for effective energy work.",
      author: "Neda Javan",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Distance Healing"
    },
    {
      title: "Creating Sacred Space: Preparing for Your Healing Session",
      excerpt: "Tips for creating the optimal environment for healing, whether you're receiving in-person or distance healing sessions.",
      author: "Neda Javan",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Preparation"
    },
    {
      title: "The Mind-Body-Spirit Connection in Healing",
      excerpt: "Understanding how our mental, physical, and spiritual aspects work together in the healing process and overall wellness.",
      author: "Neda Javan",
      date: "February 12, 2024",
      readTime: "8 min read",
      category: "Holistic Health"
    },
    {
      title: "Seasonal Energy: Aligning with Nature's Rhythms",
      excerpt: "How to work with seasonal energies to support your healing journey and maintain balance throughout the year.",
      author: "Neda Javan",
      date: "February 5, 2024",
      readTime: "5 min read",
      category: "Seasonal Healing"
    }
  ];

  const categories = ["All", "Healing Basics", "Chakras", "Distance Healing", "Holistic Health", "Seasonal Healing"];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Healing Blog
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Insights, guidance, and wisdom on your journey to wellness, 
            spiritual growth, and energy healing.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Article</h2>
          </div>
          
          {posts
            .filter(post => post.featured)
            .map((post, index) => (
              <Card key={index} className="border-0 shadow-glow bg-card max-w-4xl mx-auto">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge className="bg-healing-gold/20 text-healing-gold border-healing-gold">
                      Featured
                    </Badge>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-3xl text-foreground mb-4">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft">
                    Read Full Article
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore insights and guidance for your healing journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts
              .filter(post => !post.featured)
              .map((post, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 bg-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="text-sm text-muted-foreground">{post.readTime}</div>
                    </div>
                    <CardTitle className="text-xl text-foreground leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {post.date}
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Subscribe to receive the latest healing insights, wellness tips, 
            and updates on new blog posts directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-healing-gold"
              />
              <Button className="bg-healing-gold/90 hover:bg-healing-gold text-foreground font-semibold shadow-glow">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;