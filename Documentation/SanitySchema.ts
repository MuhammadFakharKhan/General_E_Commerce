// import { defineType, defineField } from 'sanity';

// export const product = defineType({
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//       validation: (Rule) => Rule.required().positive(),
//     }),
//     defineField({
//       name: 'stock',
//       title: 'Stock',
//       type: 'number',
//       validation: (Rule) => Rule.required().integer().min(0),
//     }),
//     defineField({
//       name: 'category',
//       title: 'Category',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Electronics', value: 'electronics' },
//           { title: 'Clothing', value: 'clothing' },
//           { title: 'Home & Kitchen', value: 'home_kitchen' },
//           { title: 'Books', value: 'books' },
//           { title: 'Toys', value: 'toys' },
//         ],
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'tags',
//       title: 'Tags',
//       type: 'array',
//       of: [{ type: 'string' }],
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'qualityRating',
//       title: 'Quality Rating',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Premium', value: 'premium' },
//           { title: 'Standard', value: 'standard' },
//           { title: 'Economy', value: 'economy' },
//         ],
//       },
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'materialType',
//       title: 'Material Type',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'sustainabilityScore',
//       title: 'Sustainability Score',
//       type: 'number',
//       validation: (Rule) => Rule.required().min(0).max(10),
//     }),
//   ],
// });



