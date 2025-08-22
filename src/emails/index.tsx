import * as React from 'react';
import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Text,
	Tailwind,
} from '@react-email/components';

const WaitlistEmail = ({ userFirstname }: { userFirstname: string }) => {
	const currentYear = new Date().getFullYear();

	return (
		<Html>
			<Tailwind>
				<Head>
					<title>Welcome to Quilly</title>
					<Preview>Magical, personalised children’s stories – launching soon.</Preview>
					<style>
						{`
              @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700&display=swap');
            `}
					</style>
				</Head>
				<Body className="bg-[#09090B] py-[40px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
					<Container className="bg-[#18181B] rounded-[8px] mx-auto p-[32px] max-w-[600px]">
						<Section className="mt-[16px] text-center">
							<Text className="text-[28px] font-bold text-white m-0">
								Welcome to <span className="text-[#DFFF1A]">Waitly</span>
							</Text>

							<Text className="text-[18px] text-[#A1A1AA] mt-[16px] mb-[16px]">
								We're thrilled to have you join our waitlist
							</Text>

							<Hr className="border-solid border-[#27272A] my-[16px] w-[80px] mx-auto" />
						</Section>

						<Section>
							<Text className="text-[16px] leading-[24px] text-white mt-[32px]">
								Hi {userFirstname},
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7]">
								Thanks for joining the waitlist for Quilly! We're working hard on creating a unique story-telling product, and we couldn't be more excited to have you with us.
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7]">
								We will keep you updated on our progress and let you know the moment it's ready for you. Got questions or ideas in the meantime? Just hit reply – we will read every email and would love to hear from you.
							</Text>

						</Section>

						<Hr className="border-solid border-[#27272A] my-[24px]" />

						<Section>
							<Text className="text-[12px] text-[#71717A] text-center m-0">
								© {currentYear} Idee8 Agency. All rights reserved.
							</Text>
							<Text className="text-[12px] text-[#71717A] text-center m-0">
								123 Digital Avenue, Suite 101, Kigali, Rwanda
							</Text>
							<Text className="text-[12px] text-[#71717A] text-center mt-[16px]">
								<Link href="https://idee8.com/unsubscribe" className="text-[#DFFF1A]">
									Unsubscribe
								</Link>{' '}
								•{' '}
								<Link href="https://idee8.com/privacy" className="text-[#DFFF1A]">
									Privacy Policy
								</Link>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default WaitlistEmail;
