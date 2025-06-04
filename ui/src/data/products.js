import { Star, Shield, Clock, Leaf, Droplet, Sun } from 'lucide-react';

export const productCategories = [
    {
        id: 'skincare',
        title: 'Skin Care',
        description: 'Advanced dermatological products for skin health',
        icon: Shield
    },
    {
        id: 'acne',
        title: 'Acne Treatment',
        description: 'Specialized products for acne-prone skin',
        icon: Droplet
    },
    {
        id: 'sun-protection',
        title: 'Sun Protection',
        description: 'Sunscreens and protective skincare',
        icon: Sun
    },
    {
        id: 'natural',
        title: 'Natural Products',
        description: 'Natural and organic skincare solutions',
        icon: Leaf
    }
];

export const products = [
    {
        id: 'retinol-serum',
        slug: 'retinol-serum',
        name: 'Advanced Retinol Serum',
        category: 'skincare',
        price: 49.99,
        rating: 4.8,
        reviewCount: 128,
        stock: 50,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3',
        description: 'Professional-grade retinol serum for anti-aging and skin renewal',
        benefits: [
            'Reduces fine lines and wrinkles',
            'Improves skin texture',
            'Boosts collagen production',
            'Evens skin tone'
        ],
        usage: 'Apply a small amount to clean, dry skin in the evening. Start with twice weekly use and gradually increase frequency.',
        ingredients: [
            'Retinol (1%)',
            'Hyaluronic Acid',
            'Vitamin E',
            'Peptide Complex'
        ],
        featured: true,
        isNew: true
    },
    {
        id: 'acne-treatment',
        slug: 'acne-treatment',
        name: 'Clear Skin Acne Solution',
        category: 'acne',
        price: 34.99,
        rating: 4.6,
        reviewCount: 95,
        stock: 75,
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3',
        description: 'Targeted treatment for acne-prone skin with salicylic acid',
        benefits: [
            'Clears existing breakouts',
            'Prevents new acne formation',
            'Reduces inflammation',
            'Controls oil production'
        ],
        usage: 'Apply to affected areas twice daily after cleansing. Can be used as a spot treatment.',
        ingredients: [
            'Salicylic Acid (2%)',
            'Tea Tree Oil',
            'Niacinamide',
            'Zinc PCA'
        ],
        featured: true,
        isNew: false
    },
    {
        id: 'vitamin-c',
        slug: 'vitamin-c',
        name: 'Brightening Vitamin C',
        category: 'skincare',
        price: 59.99,
        rating: 4.9,
        reviewCount: 156,
        stock: 30,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3',
        description: 'High-potency vitamin C serum for bright, glowing skin',
        benefits: [
            'Brightens complexion',
            'Fades dark spots',
            'Protects from free radicals',
            'Boosts collagen'
        ],
        usage: 'Apply 3-4 drops to clean skin in the morning before moisturizer and sunscreen.',
        ingredients: [
            'L-Ascorbic Acid (15%)',
            'Vitamin E',
            'Ferulic Acid',
            'Glutathione'
        ],
        featured: true,
        isNew: true
    },
    {
        id: 'sunscreen-spf50',
        slug: 'sunscreen-spf50',
        name: 'Ultra Protection SPF 50+',
        category: 'sun-protection',
        price: 29.99,
        rating: 4.7,
        reviewCount: 203,
        stock: 100,
        image: 'https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3',
        description: 'Broad-spectrum sunscreen with advanced UV protection',
        benefits: [
            'Broad-spectrum protection',
            'Water-resistant',
            'Non-greasy formula',
            'Suitable for sensitive skin'
        ],
        usage: 'Apply generously 15 minutes before sun exposure. Reapply every 2 hours or after swimming.',
        ingredients: [
            'Zinc Oxide',
            'Titanium Dioxide',
            'Vitamin E',
            'Green Tea Extract'
        ],
        featured: false,
        isNew: false
    },
    {
        id: 'natural-moisturizer',
        slug: 'natural-moisturizer',
        name: 'Natural Hydrating Cream',
        category: 'natural',
        price: 39.99,
        rating: 4.5,
        reviewCount: 87,
        stock: 60,
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3',
        description: 'Organic moisturizer with natural ingredients',
        benefits: [
            '24-hour hydration',
            'Soothes sensitive skin',
            'Natural ingredients',
            'Eco-friendly packaging'
        ],
        usage: 'Apply to clean face and neck morning and evening.',
        ingredients: [
            'Aloe Vera',
            'Shea Butter',
            'Jojoba Oil',
            'Chamomile Extract'
        ],
        featured: false,
        isNew: true
    }
];

export const reviews = [
    {
        id: 1,
        productId: 'retinol-serum',
        rating: 5,
        title: 'Amazing Results!',
        comment: 'Saw visible improvement in just 2 weeks. Highly recommend!',
        author: 'Sarah M.',
        date: '2024-02-15',
        verified: true
    },
    {
        id: 2,
        productId: 'retinol-serum',
        rating: 4,
        title: 'Good but takes time',
        comment: 'Takes some time to see results but worth the wait.',
        author: 'John D.',
        date: '2024-02-10',
        verified: true
    }
]; 