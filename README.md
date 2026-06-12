# ExamTrust CaaS (Veritas)

Welcome to **ExamTrust Certificate as a Service (CaaS)** — a decentralized credentialing platform built for modern organizations to issue tamper-proof, on-chain certificates.

## Tech Stack

This project is built using a modern React stack optimized for performance and type-safety:
- **Framework:** [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) (built on Radix UI)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms & Validation:** React Hook Form + Zod

## Getting Started

### Prerequisites
Make sure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1. Clone the repository and navigate into the project directory.
2. Install the dependencies:
   ```bash
   bun install
   ```

### Running the App

Start the development server:
```bash
bun run dev
```

The app will be available at `http://localhost:3000` (or whichever port is assigned).

### Building for Production

To create an optimized production build:
```bash
bun run build
```

## Features
- **Decentralized Credentialing:** Issue verifiable certificates on-chain (Layer-2).
- **Public Verification Portal:** Anyone can instantly verify a certificate via URL, ID, hash, or by dropping the PDF or scanning a QR code.
- **Organization Dashboard:** Register your organization, design templates, and issue credentials effortlessly.

## License
MIT
