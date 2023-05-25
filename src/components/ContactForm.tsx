function ContactForm() {
	return (
		<form className='mx-auto max-w-[800px] rounded-lg p-12 shadow-lg'>
			<div className='flex justify-between'>
				<div className='w-[47%]'>
					<label htmlFor='name'>
						Your Name <span className='text-red-500'>*</span>
					</label>
					<input
						type='text'
						id='name'
						className='mb-6 mt-4 w-full rounded-lg border-2 border-slate-300 p-2 px-4 outline-none focus:border-emerald-700'
						placeholder='이름'
					/>
					<label htmlFor='email'>
						Email <span className='text-red-500'>*</span>
					</label>
					<input
						type='text'
						id='email'
						className='mb-6 mt-4 w-full rounded-lg border-2 border-slate-300 p-2 px-4 outline-none focus:border-emerald-700'
						placeholder='이메일'
					/>
					<label htmlFor='phone'>Phone</label>
					<input
						type='text'
						id='phone'
						className='mb-6 mt-4 w-full rounded-lg border-2 border-slate-300 p-2 px-4 outline-none focus:border-emerald-700'
						placeholder='전화번호'
					/>
				</div>
				<div className='w-[47%]'>
					<label htmlFor='message' className='pb-4'>
						Message <span className='text-red-500'>*</span>
					</label>
					<textarea
						id='message'
						className='sm:text-md mt-4 h-[260px] w-full resize-none rounded-lg border border-2 border-slate-300 p-4 outline-none focus:border-emerald-600'
						placeholder='내용을 입력해주세요'
					/>
				</div>
			</div>
			<button className='mx-auto mt-10 flex h-12 w-[180px] items-center justify-center rounded-lg bg-emerald-700 text-white hover:bg-emerald-800'>
				Send Message
			</button>
		</form>
	);
}

export default ContactForm;
