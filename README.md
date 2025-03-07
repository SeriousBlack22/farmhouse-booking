# Aarohi Farm - Farmhouse Booking Website

A modern, responsive website for booking stays at Aarohi Farm, a beautiful 2 BHK farmhouse surrounded by nature. Built with Next.js, React, and Tailwind CSS.

![Aarohi Farm](https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)

## Features

- 🏡 Beautiful 2 BHK farmhouse with swimming pool
- 🍽️ Options with food (₹2,000/person) or without food (₹1,500/person)
- 🎮 Indoor and outdoor games available
- 🔥 Bonfire arrangement on request
- 🌿 Surrounded by beautiful natural environment
- 📱 Fully responsive design for all devices
- 🎨 Beautiful UI with modern design principles

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Icons**: React Icons
- **Date Handling**: date-fns, react-datepicker

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aarohi-farm.git
   cd aarohi-farm
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
aarohi-farm/
├── app/                  # Next.js App Router
│   ├── booking/          # Booking page
│   ├── gallery/          # Photo gallery
│   ├── amenities/        # Amenities details
│   ├── login/            # Authentication pages
│   └── ...
├── components/           # Reusable UI components
├── public/               # Static assets
└── ...
```

## Deployment

This project can be easily deployed to Vercel:

```bash
npm run build
# or
yarn build
```

## Future Enhancements

- Integration with a real database (MongoDB, PostgreSQL)
- Payment processing with Razorpay/Stripe
- Admin dashboard for booking management
- Reviews and ratings system
- Interactive maps for location
- Virtual tour of the farmhouse

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/) 