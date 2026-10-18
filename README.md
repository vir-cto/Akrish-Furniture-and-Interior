# Akrish Furniture and Interior ERP

A complete Furniture and Interior Management ERP system built as a monorepo using Next.js, React, TypeScript, Firebase, and Firebase Cloud Functions.

The system contains:

- Furniture ERP
- Interior ERP
- Public Website
- Firebase backend
- Payment integration
- Role-based permissions
- Project management
- Customer and enquiry management
- Product and inventory management
- Orders and payments
- Quotations and contracts
- HRMS and attendance
- Reports and analytics
- Project document vault

---

## 1. Project Structure

```text
collective-erp/
│
├── apps/
│   │
│   ├── erp/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   └── (erp)/
│   │   │   │       ├── furniture/
│   │   │   │       │   ├── dashboard/
│   │   │   │       │   ├── enquiries/
│   │   │   │       │   ├── orders/
│   │   │   │       │   ├── payments/
│   │   │   │       │   ├── products/
│   │   │   │       │   └── reports/
│   │   │   │       │
│   │   │   │       └── interior/
│   │   │   │           ├── dashboard/
│   │   │   │           ├── contracts/
│   │   │   │           ├── quotations/
│   │   │   │           ├── projects/
│   │   │   │           ├── payments/
│   │   │   │           ├── hrms/
│   │   │   │           └── reports/
│   │   │   │
│   │   │   └── core/
│   │   │       ├── auth/
│   │   │       └── config/
│   │   │
│   │   ├── middleware.ts
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   │
│   └── website/
│       ├── src/
│       │   ├── app/
│       │   ├── services/
│       │   └── types/
│       ├── middleware.ts
│       ├── next.config.mjs
│       ├── package.json
│       └── tailwind.config.ts
│
├── functions/
│   ├── src/
│   │   ├── core/
│   │   │   ├── firebaseAdmin.ts
│   │   │   ├── authClaims.ts
│   │   │   └── cashfreeClient.ts
│   │   │
│   │   ├── furniture/
│   │   │   ├── api/
│   │   │   └── triggers/
│   │   │
│   │   ├── interior/
│   │   │   ├── api/
│   │   │   ├── integrations/
│   │   │   └── triggers/
│   │   │
│   │   └── index.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── firebase/
│   ├── firebase.json
│   ├── firestore.rules
│   ├── firestore.indexes.json
│   └── storage.rules
│
├── package.json
└── README.md