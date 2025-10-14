
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl font-bold mb-6">Send a message</h1>
              <ContactForm />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-6">Get in touch</h1>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-portfolio-accent mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone :</h3>
                    <p className="text-gray-600 dark:text-gray-300">01515248558</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-portfolio-accent mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address :</h3>
                    <p className="text-gray-600 dark:text-gray-300">Finland</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-portfolio-accent mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email :</h3>
                    <p className="text-gray-600 dark:text-gray-300">mushfiqulislamchowdhury@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Social Media</h3>
                <SocialLinks />
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold mb-3">Availability</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm currently employed full-time at PIPELINE Bangladesh Ltd., but I'm open to discussing interesting projects, collaborations, or speaking engagements. Feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
