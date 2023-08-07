'use client';
import React, {useState} from 'react';

import TheHeader from '@/widgets/shared/TheHeader';

const Page = () => {
    const [paragraphs, setParagraphs] = useState([{
        id: 1,
        isOpen: true,
        title: 'Где можно найти яндекс диск?',
        description: `Ссылка на яндекс-диск: <a href="http://owncloud.letoctf/s/n7VN8jKnqCJsH7F">http://owncloud.letoctf/s/n7VN8jKnqCJsH7</a>`
    }, {
        id: 2,
        isOpen: false,
        title: 'Куда можно залить свой прекрасный таск, чтобы другие участники помучались?',
        description: `Ссылка на яндекс-диск: <a href="https://forms.gle/3uTjsjcffwaB4kfKA">https://forms.gle/3uTjsjcffwaB4kfKA</a>`
    },{
        id: 3,
        isOpen: false,
        title: 'Где можно потратить баллы, заработанные на ЛШ CTF?',
        description: `Ссылка на мерч-шоп: <a href="https://ctfmarket.ru">https://ctfmarket.ru</a>`
    }, {
        id: 4,
        isOpen: false,
        title: 'Как заказать что-нибудь из еды?',
        description: `Наберите корзину, подойдите к любому куратору и попросите помочь забрать заказ`
    }, {
        id: 5,
        isOpen: false,
        title: 'Что будет если я перестану ходить на зарядку?',
        description: `Наказания за это не будет, но ты не получишь эмоций и хорошего настроения с самого утра, а также 75 баллов, которые помогут продвинуться тебе в рейтинге и впоследствии купить крутой мерч`
    }]);

    return (
        <>
            <TheHeader/>

            <main className='mt-[50px] ml-[10%] pb-[50px] w-[80%]'>
                <h1 className='mb-[70px] w-[97.5%] border-b-2 border-[#62ffe3] text-[#ffffff] text-[2rem]'>В этом разделе вы можете найти ответ на интересующий вас вопрос</h1>

                {paragraphs.map((paragraph:any) => (
                    <div key={paragraph.id} className='relative py-[10px] px-[20px] w-full h-auto min-h-[50px] border-2 border-[#42d4ba]'>
                        <span className={`flex justify-between items-center min-h-[50px] h-auto${paragraph.isOpen ? 'mb-[15px]' : ''}`}>
                            <p className="h-full text-[#ffffff] text-[1.875rem] font-bold leading-[50px]">{ paragraph.title }</p>

                            <img src="/static/openMoreIcon.svg" alt="Открыть подробности" className='w-[25px] h-[25px] cursor-pointer' onClick={() => {paragraph.isOpen = !paragraph.isOpen; setParagraphs([...paragraphs])}}/>
                        </span>

                        {paragraph.isOpen && <p className="mt-[20px] pb-[20px] w-full text-[#ffffff] text-[1.5rem] text-justify leading-normal" dangerouslySetInnerHTML={{ __html: paragraph.description}}></p>}
                    </div>
                ))}
            </main>
        </>
    );
};

export default Page;