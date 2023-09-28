<?php
define( 'WP_CACHE', false ); // Added by WP Rocket

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'turboman_poki' );

/** Database username */
define( 'DB_USER', 'turboman_pokitest' );

/** Database password */
define( 'DB_PASSWORD', 'oxuK26_31' );

/** Database hostname */
define( 'DB_HOST', 'srv-pleskdb48.ps.kz:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'dAJ/4jl{QO(w:R;j J8}IvCU$aWXj#Y,01$O|vIO@eq|6MK`,2,@F(a@a5]#1W.{' );
define( 'SECURE_AUTH_KEY',  '(6Iet+} ?j/Vnz#AM5Q8U*`K1v<ZHtSc=6R2Hu0)UZK0jWWkK+jZ+5Sa{,|9pHj]' );
define( 'LOGGED_IN_KEY',    'u),QiaLCx~Jpc5ngl!:lW4`G<wt0LK>$Bn=~,MzSzWz&rZR:L^6MA:)nO1KB_5V=' );
define( 'NONCE_KEY',        'FHr=]Q K5Au+]J^h*!HL8GO%j$O%vJI{>+POsg:YvC,FX]&{(] ?Hl`oS[Q&>C#e' );
define( 'AUTH_SALT',        '7q0=qIdTtm2W^ |mxD`wjNF<sFY<V=1XxE)nwrF8w}m*%[3%s0>J>u`1IcJB4kUY' );
define( 'SECURE_AUTH_SALT', '`=42[Pr9d0l]-u:g@Jf|>`<ct+v2,Z1#8W8si(X/9HG& rD?Tr%=ic?A%nAb&!E,' );
define( 'LOGGED_IN_SALT',   'nvX7hQ&MW-hBnh*G!X[dIE>hqe)(Wx/{R</PA=];)!|Nn|([C#x{1OV%I+e`=[>H' );
define( 'NONCE_SALT',       'xKRvHpAP/,6&#[wE0]bal=YF+ush($H``ByrQrz_}{X0#:u.G=Qm0mu.6`8ZbpEG' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ninja_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
