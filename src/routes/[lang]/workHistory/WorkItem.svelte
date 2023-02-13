<script lang="ts">
	export let company: string;
	export let role: string;
	export let description: string;
	export let period: string;
</script>

<div class="item">
	<div class="info">
		<div class="title">
			<h2>{company}</h2>
			<h2 class="role">{role}</h2>
		</div>
		<p>{description}</p>
	</div>
	<div class="circle">
		<p class="period">{period}</p>
	</div>
</div>

<style>
	.item {
		display: flex;
		position: relative;
		align-items: center;
	}
	.circle {
		width: 30px;
		height: 30px;
		border-radius: 100%;
		border: 1px solid black;
		position: absolute;
		right: 0;
	}
	.period {
		transform: rotate(-90deg);
		position: relative;
		right: 35px;
		top: 30px;
		white-space: nowrap;
	}
	.info {
		width: max(30vw, 7rem);
		margin-left: 50px;
		white-space: pre-wrap;
	}
	.title {
		display: flex;
		align-items: center;
		gap: 1rem;
		line-height: 1.2rem;
	}
	.role,
	.period,
	.info {
		font-weight: 400;
	}

	p {
		margin: 0;
	}

	@media (max-width: 815px) {
		.info {
			width: 65vw;
		}
	}
</style>
