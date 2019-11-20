<?php

/**
 * The template for displaying all single posts.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

		<?php while (have_posts()) : the_post(); ?>

			<?php get_template_part('template-parts/content', 'single'); ?>


		<?php endwhile; // End of the loop. 
		?>
		<?php if (is_home() || is_single()) : ?>
			<button class="new-quote-button" type="button" id="new-quote-button">Show Me Another!</button>
		<?php endif; ?>
	</main><!-- #main -->
</div><!-- #primary -->

<?php get_footer(); ?>