import React from 'react';
import BlogView from './BlogView';
import { Grid, GridItem } from '@chakra-ui/layout';
// import CategoryLink from "./CategoryLink";

const Blog = () => {
	const data = [
		{
			tag: "Tech",
      title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
			body: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat mauris eu est ultricies tristique. Mauris interdum viverra egestas. Nullam id diam venenatis, volutpat ligula eu, dictum ligula. Proin ac sapien eget nulla feugiat lacinia. Phasellus ultrices turpis sed consequat lobortis. Sed venenatis vulputate dui, volutpat congue enim mattis id. Donec egestas pulvinar laoreet. Vestibulum pulvinar ante at ante elementum, vel aliquam erat mollis. Donec euismod id justo at mattis.
Nulla sit amet nunc in turpis bibendum vestibulum. Nam augue augue, tempus eget lacus quis, gravida condimentum turpis. Nam venenatis aliquam felis ut hendrerit. Praesent fringilla nec libero non ultrices. Sed imperdiet id felis vel lobortis. Mauris ante metus, lacinia sagittis sollicitudin ut, rutrum a augue. Aliquam commodo faucibus eros, ut viverra lorem interdum at. Nulla pellentesque porttitor faucibus. Vestibulum eu orci laoreet, placerat dui eget, porttitor magna. Cras ac semper velit. Donec vitae luctus lacus. Proin congue feugiat urna non convallis. Cras rutrum nisl id ultricies dapibus. Curabitur molestie sem vel augue elementum feugiat. Integer sodales dui maximus tortor ultricies, at vestibulum tellus cursus. Cras vulputate elit massa, in scelerisque ante tempus mollis.
`,
			author: 'bibendum vestibulum',
			info: 'Mar 10, 2020 · 8min read'
		},
		{
			tag: "Food",
      title: 'Phasellus commodo enim sed est hendrerit, nec eleifend est scelerisque',
			body: `Phasellus commodo enim sed est hendrerit, nec eleifend est scelerisque. Curabitur sodales leo in pharetra egestas. Etiam libero est, faucibus in lobortis sit amet, dapibus id mauris. Proin ante dui, luctus ut tellus ac, cursus semper arcu. Proin vel tellus at ante imperdiet mollis. Duis eget tempor sapien. Sed varius ac purus quis dapibus. Aenean et ex bibendum, mollis neque placerat, vestibulum elit. Quisque metus ante, pharetra consectetur odio quis, ultrices posuere sapien. Aenean maximus turpis vel nisl tincidunt placerat. Curabitur sed velit tristique, tempus elit ultricies, vulputate sapien. Morbi sed nulla nec turpis feugiat vulputate blandit hendrerit neque. Suspendisse rhoncus aliquet neque, id sagittis elit dictum sit amet. Pellentesque sapien nibh, fringilla vel urna et, molestie consectetur metus. Sed eu orci sit amet eros laoreet ultricies. Pellentesque porttitor auctor velit, eget suscipit erat tincidunt vitae.
      `,
			author: 'bibendum vestibulum',
			info: 'Dec 04, 2020 · 6min read'
		},
		{
			tag: "Travel",
      title: 'Proin ac vestibulum urna. Suspendisse conuat accumsan tortor',
			body: `
      Proin ac vestibulum urna. Suspendisse consequat accumsan tortor, at rhoncus tortor mattis at. Nam nibh tortor, fringilla nec sem quis, semper rhoncus felis. Donec vitae tellus eros. Quisque odio sapien, ullamcorper ac nisi non, condimentum commodo mauris. Aliquam quis felis euismod, egestas turpis vel, finibus ante. Duis a imperdiet nibh. Vivamus ornare sapien nisl, ut bibendum dolor varius non. Aenean rhoncus vitae nisi in maximus. Donec at eros diam. Pellentesque sed augue vel urna imperdiet sagittis id a odio. Nullam ut nunc imperdiet, congue felis non, tincidunt magna. Mauris suscipit et augue eu semper. Sed fringilla ornare porta. Mauris efficitur tincidunt varius.

      `,
			author: 'bibendum vestibulum',
			info: 'Sep 07, 2021 · 5min read'
		},
		{
			tag: "Travel",
      title: 'Vestibulum tincidunt ex non dapibus varius. Suspendisse potenti',
			body: `
      Vestibulum tincidunt ex non dapibus varius. Suspendisse potenti. In a euismod nulla, in condimentum sapien. Nulla imperdiet, nisl id dignissim porta, turpis odio imperdiet ante, eu pharetra libero diam at nibh. Maecenas efficitur at massa sit amet hendrerit. Donec euismod elit ut leo cursus pulvinar. Morbi lacinia ligula sit amet efficitur pretium. Integer ultrices est eget nibh pellentesque, a condimentum sapien sagittis. Donec ut ex molestie, scelerisque mauris eu, rhoncus elit.

      Ut vulputate vitae lacus ut tempus. Fusce ante sapien, tempor et tortor eget, placerat tempus augue. Nullam a dolor id ex pharetra fermentum ac sed turpis. In sit amet lacus non lacus facilisis dapibus eget in erat. Quisque convallis lacus sem, ut ornare urna sollicitudin in. Cras cursus magna et blandit dictum. Suspendisse ut varius sapien.
      
      `,
			author: 'dapibus varius. Suspendisse',
			info: 'Apr 12, 2021 · 3min read'
		},
		{
			tag: "Entertainment",
      title: 'Suspendisse ultrices dapibus magna et suscipit. Morbi vehicula',
			body: `
      Suspendisse ultrices dapibus magna et suscipit. Morbi vehicula, purus ut vehicula aliquet, ligula ligula pharetra orci, a auctor enim turpis finibus erat. Vestibulum sagittis at sapien sit amet sollicitudin. Sed sed suscipit libero. Donec commodo justo et nulla lobortis, in eleifend lectus dapibus. Phasellus porta velit a gravida vestibulum. Quisque eu lacus ut elit faucibus auctor non a dolor. Etiam nec nisl non eros ultrices sodales. Curabitur volutpat purus sed pharetra ornare. Praesent quis sapien hendrerit, congue massa sit amet, scelerisque nisi. Suspendisse vitae auctor ex, sed aliquet lacus. In tempor eu mi vel vehicula. Vestibulum sed ipsum nulla. Aliquam finibus, dolor in vulputate euismod, nibh nibh ullamcorper augue, sed semper magna ante a arcu. Morbi non fringilla metus, fringilla rhoncus ante. Ut quis tellus sit amet nisl aliquet suscipit a at nisi.

      Donec et diam sit amet nunc aliquet interdum vel ut lectus. Donec molestie nisl nec metus pretium, at tincidunt quam tincidunt. Duis ultricies, est in pulvinar consectetur, mi neque varius arcu, eu lobortis dolor nibh nec arcu. Proin commodo sagittis augue in suscipit. Ut nisi leo, scelerisque nec semper vel, dapibus ac tellus. Quisque eu elementum diam, a bibendum lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nam pellentesque eget augue non semper. Donec vitae eros orci. Duis ac`,
			author: 'Morbi vehicula',
			info: 'Aug 18, 2021 · 5min read'
		}
	];
	return (
		<div>
			<Grid h="100vh" templateRows="repeat(12, 1fr)" templateColumns="repeat(12, 1fr)">
				{data.map((i, idx) => (
					<GridItem key={idx} colSpan={[ '10', '5', '4', '4' ]}>
						<BlogView tag={i.tag} title={i.title} author={i.author} info={i.info} body={i.body} />
					</GridItem>
				))}
			</Grid>
		</div>
	);
};

export default Blog;
