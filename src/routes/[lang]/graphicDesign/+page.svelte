<script lang="ts">
	import { blurIn, blurOut } from '$lib/customBlur';
	import aPlusCourses from '$lib/assets/apluscourses.png';
	import aPlusFooter from '$lib/assets/aplusfooter.png';
	import o1 from '$lib/assets/o1.png';
	import { autoHash } from '$lib/autoHash';
</script>

<svelte:head>
	<title>Jaakko Nakaza|Graphic Design</title>
	<style>
		html {
			scroll-snap-type: y proximity;
		}
	</style>
</svelte:head>

<div in:blurIn>
	<div id="graphic-container">
		<section use:autoHash id="aPlusCourses" class="page">
			<img src={aPlusCourses} alt="" width="2000" height="1000" />
			<img class="blur" src={aPlusCourses} alt="" width="2000" height="1000" />
			<div class="info">
				<h2>A+ Courses</h2>
				<p>
					<a href="https://github.com/Aalto-LeTech/aplus-courses">A+ Courses</a> is a plugin for IntelliJ.
					It is used on programming courses to make the experience of using the IDE more smooth. I have
					designed the branding and have been a part of designing the user experience and look of the
					plugin. The logo is a combination of the characters A and + and it's look is inspired by gradient-rich
					style of the IntelliJ branding.
				</p>
			</div>
			<img src={aPlusFooter} alt="" width="1500" height="50" />
		</section>
		<section use:autoHash id="o1" class="page">
			<img src={o1} alt="" width="2000" height="1000" />
			<img class="blur" src={o1} alt="" width="2000" height="1000" />
			<div class="info">
				<h2>Ohjelmointi 1</h2>
				<p>
					<a href="https://plus.cs.aalto.fi/o1/">Ohjelmointi 1</a> (Programming 1) is an
					introductory Scala programming course. The logo was designed to be friendly and modern,
					with the the number 1 wrapped by the Scala 3 logo. The O filled with art by
					<a href="https://christinalassheikki.com/">Christina Lassheikki</a>, which is also used to
					illustrate the course.
				</p>
			</div>
			<div />
		</section>
	</div>
</div>

<style>
	#graphic-container {
		display: flex;
		flex-direction: column;
		gap: 10rem;
		padding-right: 5rem;
	}
	.info {
		padding: 0 2rem;
	}
	@media (max-width: 815px) {
		#graphic-container {
			margin-top: 5rem;
			padding-right: 0;
		}
	}
	#graphic-container img {
		width: 100%;
		height: auto;
	}
	.page {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		height: 100vh;
		scroll-snap-align: start;
		backdrop-filter: blur(100px);
	}
	.blur {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		filter: blur(20px);
	}
</style>
