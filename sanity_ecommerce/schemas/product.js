export default{
    name: 'product',
    title: 'Product',
    type: 'document',
    field: [
        {
            name:'image',
            title:'Image',
            type:'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            // SLUG is unique string
            name:'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: "Details",
            type: 'string'
        }
    ]

}