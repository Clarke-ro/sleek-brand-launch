
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ReviewFormProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted?: () => void;
}

const ReviewForm = ({ isOpen, onClose, onReviewSubmitted }: ReviewFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    rating: 5,
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Starting review submission with data:', formData);

    try {
      // Prepare the data for insertion - ensure all required fields are present
      const reviewData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        role: formData.role.trim() || null,
        rating: formData.rating,
        content: formData.content.trim(),
        is_approved: false // Explicitly set this
      };

      console.log('Prepared review data for insertion:', reviewData);

      // Insert the review into the database
      const { data: insertedReview, error: insertError } = await supabase
        .from('reviews')
        .insert([reviewData])
        .select()
        .single();

      if (insertError) {
        console.error('Database insertion error:', insertError);
        throw insertError;
      }

      console.log('Review inserted successfully:', insertedReview);

      // Send notification email
      try {
        console.log('Attempting to send notification email...');
        const { error: emailError } = await supabase.functions.invoke('send-review-notification', {
          body: {
            reviewId: insertedReview.id,
            name: reviewData.name,
            email: reviewData.email,
            company: reviewData.company,
            role: reviewData.role,
            rating: reviewData.rating,
            content: reviewData.content
          }
        });

        if (emailError) {
          console.error('Email notification error:', emailError);
          // Don't fail the whole process if email fails
        } else {
          console.log('Review notification email sent successfully');
        }
      } catch (emailError) {
        console.error('Error sending notification email:', emailError);
        // Continue with success message even if email fails
      }

      toast({
        title: "Review submitted successfully!",
        description: "Thank you for your feedback. Your review will be published after approval.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        rating: 5,
        content: ''
      });
      
      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
      
      onClose();
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: "Error submitting review",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-navy">Leave a Review</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating *
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= formData.rating
                        ? 'text-gold fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Review *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
              placeholder="Tell us about your experience..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-navy hover:bg-navy/90 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Review
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ReviewForm;
