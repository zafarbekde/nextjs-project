import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { Fragment } from 'react';
import { format } from 'date-fns';
import { SidebarProps } from './sidebar.props';
import { useRouter } from 'next/router';

const Sidebar = ({ latestBlogs, categories }: SidebarProps) => {
	const router = useRouter();

	return (
		<Box width={{ xs: '100%', md: '30%' }}>
			<Box position={'sticky'} top={'100px'} sx={{ transition: 'all .3s ease' }}>
				<Box padding={'20px'} border={'1px solid gray'} borderRadius={'8px'}>
					<Typography variant='h5'>Latest blog</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
						{latestBlogs.map(item => (
							<Box sx={{ cursor: 'pointer' }} onClick={() => router.push(`/blog/${item.slug}`)} key={item.id} marginTop={'20px'}>
								<Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
									<Image
										src={item.image.url}
										alt={item.title}
										width={100}
										height={100}
										style={{ objectFit: 'cover', borderRadius: '8px' }}
									/>
									<Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
										<Typography variant='body1'>{item.title}</Typography>
										<Box sx={{ display: 'flex', gap: '10px' }}>
											<Avatar alt={item.author.name} src={item.author.avatar.url} />
											<Box>
												<Typography variant='body2'>{item.author.name}</Typography>
												<Box sx={{ opacity: '.6' }}>{format(new Date(item.createdAt), 'dd MMM, yyyy')}</Box>
											</Box>
										</Box>
									</Box>
								</Box>
								<Divider sx={{ marginTop: '20px' }} />
							</Box>
						))}
					</Box>
				</Box>
				<Box padding={'20px'} marginTop={'20px'} border={'1px solid gray'} borderRadius={'8px'}>
					<Typography variant='h5'>Category</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
						{categories.map(nav => (
							<Fragment key={nav.slug}>
								<Button
									onClick={() => router.push(`/category/${nav.slug}`)}
									fullWidth
									sx={{ justifyContent: 'flex-start', height: '50px' }}
								>
									{nav.label}
								</Button>
								<Divider />
							</Fragment>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Sidebar;

const data = [
	{
		image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
		title: 'Technical SEO with Hygraph',
		exerpt: 'Get started with your SEO implementation when using a Headless CMS',
		author: {
			name: 'Samar Badriddinov',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
	{
		image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
		title: 'Union Types and Sortable Relations with Hygraph',
		exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
		author: {
			name: 'Samar Badriddinov',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
];
