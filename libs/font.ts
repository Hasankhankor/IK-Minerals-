import { Inter, Work_Sans, } from 'next/font/google';
import localFont from '@next/font/local'


export const inter = Inter({ subsets: ['latin'] })

export const googleSans = localFont({
    src:[
        {
            path:'../public/fonts/ProductSans-Regular.ttf',
            weight:'400'
        },
        {
            path:'../public/fonts/ProductSans-Medium.ttf',
            weight:'500'
        },
        {
            path:'../public/fonts/ProductSans-Bold.ttf',
            weight:'700'
        }
    ]
})