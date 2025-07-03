'use client';

import { motion } from 'framer-motion';

const partners = [
  {
    name: 'AgriTech Solutions',
    logoUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9d1b3d95-b042-4c54-9e32-3a3a4b6c3d24?apiKey=285202b7484b47a896913b5c5e88a62c&width=150'
  },
  {
    name: 'Global Commodities Ltd',
    logoUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c4d3d2c1-d3f3-4e4b-8c1a-2b6d6e3c5f4a?apiKey=285202b7484b47a896913b5c5e88a62c&width=150'
  },
  {
    name: 'FarmConnect Nigeria',
    logoUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2b1c0d9-e8f7-4a6c-8e9a-1d2b3c4d5e6f?apiKey=285202b7484b47a896913b5c5e88a62c&width=150'
  },
  {
    name: 'Export Partners Inc',
    logoUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f5a4b3c2-d1e0-4b9a-8c7d-6e5f4a3b2c1d?apiKey=285202b7484b47a896913b5c5e88a62c&width=150'
  },
  {
    name: 'Quality Assurance Co',
    logoUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3c2d1e0-f5a4-4b9a-8c7d-6e5f4a3b2c1d?apiKey=285202b7484b47a896913b5c5e88a62c&width=150'
  },
  {
    name: 'Logistics Masters',
    logoUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e8f7a6c5-d1e0-4b9a-8c7d-6e5f4a3b2c1d?apiKey=285202b7484b47a896913b5c5e88a62c&width=150'
  }
];

export default function PartnerLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">
            Trusted Partners
          </h2>
          <p className="text-lg text-gray-600">
            Working with leading organizations across the agricultural value chain
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center space-x-16"
              animate={{
                x: [0, -1264], // (150px width + 64px space) * 6 partners
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 min-w-[150px] flex items-center justify-center"
                >
                  <img src={partner.logoUrl} alt={partner.name} className="h-12 object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
              Ready to Scale Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied buyers who trust URAT Limited for their commodity needs
            </p>
            <a href="/buyer-registration" className="btn-primary inline-block">
              Register as Buyer
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

