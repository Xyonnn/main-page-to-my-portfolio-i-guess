import { Diamond } from 'lucide-react';

export default function SectionDivider(){
    return(
        <div className='flex items-center gap-4 px-6'>
            <div className='h-px flex-1 bg-gray-800'/>
            <Diamond className='text-gray-600' size={14} strokeWidth={1.5}/>
            <div className='h-px flex-1 bg-gray-800'/>
        </div>
    );
}