import { useState } from 'react';
import { Star } from 'lucide-react';


const Feedbacks = () => {
    const [reviews, setReviews] = useState([
      {
        id: 1,
        name: "Sarah M.",
        rating: 5,
        comment: "Excellent service and professional staff. My skin has never looked better!",
        service: "Acne Treatment"
      },
      {
        id: 2,
        name: "John D.",
        rating: 5,
        comment: "The anti-aging treatment exceeded my expectations. Highly recommend!",
        service: "Anti-Aging Treatment"
      },
      {
        id: 3,
        name: "Maria L.",
        rating: 4,
        comment: "Great products and knowledgeable team. Will definitely return!",
        service: "Product Purchase"
      }
    ]);
  
    const [newReview, setNewReview] = useState({
      name: '',
      rating: 5,
      comment: '',
      service: ''
    });
  
    const submitReview = () => {
      if (newReview.name && newReview.comment && newReview.service) {
        setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
        setNewReview({ name: '', rating: 5, comment: '', service: '' });
      }
    };
  
    return (
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Patient Reviews</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our patients say about their experience with us
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Recent Reviews</h3>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="p-6 bg-background rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">{review.name}</h4>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">{review.comment}</p>
                    <p className="text-sm text-primary">{review.service}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Leave a Review</h3>
              <div className="p-6 bg-background rounded-xl border border-border space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                />
                
                <select
                  value={newReview.service}
                  onChange={(e) => setNewReview({...newReview, service: e.target.value})}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                >
                  <option value="">Select service</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Acne Treatment">Acne Treatment</option>
                  <option value="Anti-Aging">Anti-Aging</option>
                  <option value="Product Purchase">Product Purchase</option>
                </select>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className={`w-8 h-8 ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        <Star className="w-full h-full fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
                
                <textarea
                  placeholder="Your review"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  rows={4}
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground resize-none"
                />
                
                <button
                  onClick={submitReview}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Feedbacks;