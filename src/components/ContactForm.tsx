'use client';
import { sendContactEmail } from '@/service/contact';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Banner from './Banner';

function ContactForm() {
	const [banner, setBanner] = useState<{ message: string; state: 'success' | 'error' } | null>(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	return (
		<>
			<form
				onSubmit={handleSubmit((data) => {
					const { name, from, subject, message } = data;
					sendContactEmail({ name, from, subject, message })
						.then(() => {
							setBanner({
								message: '메일이 성공적으로 전송되었습니다.',
								state: 'success',
							});
							reset();
						})
						.catch(() => {
							setBanner({
								message: '메일 전송에 실패했습니다. 다시 시도해주세요.',
								state: 'error',
							});
						})
						.finally(() => {
							setTimeout(() => {
								setBanner(null);
							}, 3000);
						});
				})}
				className='mx-auto max-w-[800px] rounded-lg p-12 shadow-lg'>
				<div className='flex justify-between'>
					<div className='w-[47%]'>
						<label htmlFor='name'>
							Your Name <span className='h-4 text-sm text-red-400'>*</span>
						</label>
						<input
							type='text'
							id='name'
							className='mb-2 mt-4 w-full rounded-lg border-2 border-slate-300 p-2 px-4 outline-none focus:border-emerald-700'
							placeholder='이름'
							{...register('name', { required: true })}
						/>
						<p className='mb-4 h-4 text-sm text-red-400'>{errors?.name ? '이름을 입력해주세요.' : ''}</p>
						<label htmlFor='from'>
							Email <span className='h-4 text-sm text-red-400'>*</span>
						</label>
						<input
							type='text'
							id='from'
							className='mb-2 mt-4 w-full rounded-lg border-2 border-slate-300 p-2 px-4 outline-none focus:border-emerald-700'
							placeholder='example@test.com'
							{...register('from', { required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ })}
						/>
						<p className='mb-4 h-4 text-sm text-red-400'>{errors?.from ? '올바른 이메일 형식을 입력해주세요.' : ''}</p>
						<label htmlFor='subject'>Title</label>
						<input
							type='text'
							id='subject'
							className='mb-2 mt-4 w-full rounded-lg border-2 border-slate-300 p-2 px-4 outline-none focus:border-emerald-700'
							placeholder='제목을 입력해주세요'
							{...register('subject', { required: true })}
						/>
						<p className='mb-4 h-4 text-sm text-red-400'>{errors?.subject ? '제목은 필수 입력사항입니다.' : ''}</p>
					</div>
					<div className='w-[47%]'>
						<label htmlFor='message' className='pb-4'>
							Message <span className='h-4 text-sm text-red-400'>*</span>
						</label>
						<textarea
							id='message'
							className='sm:text-md mt-4 h-[290px] w-full resize-none rounded-lg border border-2 border-slate-300 p-4 outline-none focus:border-emerald-600'
							placeholder='내용을 입력해주세요'
							{...register('message', { required: true })}
						/>
						<p className='mb-4 h-4 text-sm text-red-400'>{errors?.message ? '내용은 필수 입력사항입니다.' : ''}</p>
					</div>
				</div>
				<button className='mx-auto mt-10 flex h-12 w-[180px] items-center justify-center rounded-lg bg-emerald-700 text-white hover:bg-emerald-800'>
					Send Message
				</button>
			</form>
			{banner && <Banner banner={banner} />}
		</>
	);
}

export default ContactForm;
