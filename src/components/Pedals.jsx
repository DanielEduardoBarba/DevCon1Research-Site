

export default function Pedals({w,h,color,accelFx = () => { },brakeFx = () => { }}) {

    return ( 
            <svg xmlns="http://www.w3.org/2000/svg" 
            height={h} width={w}   viewBox="0 0 512 512">
<path color={"#2D2E30"} d="M444.506,186.46c-14.405,0-26.081-11.676-26.081-26.081V82.137c0-14.405,11.676-26.081,26.081-26.081  s26.081,11.676,26.081,26.081v78.241C470.587,174.782,458.91,186.46,444.506,186.46z"/>
<path color={"#E1E1E3"} d="M512,417.146c0,21.432-17.374,38.806-38.807,38.806h-57.377c-21.432,0-38.807-17.374-38.807-38.806  V176.581c0-21.432,17.374-38.807,38.807-38.807h57.377c21.432,0,38.807,17.374,38.807,38.807V417.146z"/>
<path color={"#8A8A91"} d="M473.193,137.775h-28.688v318.177h28.688c21.432,0,38.806-17.374,38.806-38.807V176.581  C512,155.149,494.625,137.775,473.193,137.775z"/>
<path color={"#2D2E30"} d="M261.18,257.169c-14.405,0-26.081-11.676-26.081-26.081V184.02l-45.846-90.05  c-6.535-12.836-1.427-28.54,11.41-35.075c12.832-6.537,28.54-1.429,35.075,11.41l48.685,95.626c1.866,3.665,2.839,7.72,2.839,11.833  v53.324C287.262,245.492,275.585,257.169,261.18,257.169z"/>
<path color={"#E1E1E3"} d="M289.869,455.951h-57.377c-21.432,0-38.807-17.374-38.807-38.806V250.768  c0-21.432,17.374-38.807,38.807-38.807h57.377c21.432,0,38.807,17.374,38.807,38.807v166.377  C328.676,438.578,311.301,455.951,289.869,455.951z"/>
<path color={"#2D2E30"} d="M67.494,257.169c-14.405,0-26.081-11.676-26.081-26.081V82.137c0-14.405,11.676-26.081,26.081-26.081  s26.081,11.676,26.081,26.081v148.95C93.575,245.492,81.899,257.169,67.494,257.169z"/>
<path color={"#E1E1E3"} d="M96.182,455.951H38.807C17.374,455.951,0,438.578,0,417.146V250.768  c0-21.432,17.374-38.807,38.807-38.807h57.377c21.432,0,38.807,17.374,38.807,38.807v166.377  C134.989,438.578,117.614,455.951,96.182,455.951z"/>
<g>
	<path color={"#8A8A91"} d="M96.182,211.962H67.494v243.99h28.688c21.432,0,38.807-17.374,38.807-38.807V250.768   C134.989,229.336,117.614,211.962,96.182,211.962z"/>
	<path color={"#8A8A91"} d="M289.342,211.962h-28.688v243.99h28.688c21.432,0,38.807-17.374,38.807-38.807V250.768   C328.148,229.336,310.774,211.962,289.342,211.962z"/>
</g>
<g>
	<path color={"#57565C"} d="M468.154,312.513h-47.299c-6.624,0-11.993-5.369-11.993-11.993v-10.788   c0-6.624,5.369-11.993,11.993-11.993h47.299c6.624,0,11.993,5.369,11.993,11.993v10.788   C480.148,307.143,474.778,312.513,468.154,312.513z"/>
	<path color={"#57565C"} d="M468.154,255.424h-47.299c-6.624,0-11.993-5.369-11.993-11.993v-10.788   c0-6.624,5.369-11.993,11.993-11.993h47.299c6.624,0,11.993,5.369,11.993,11.993v10.788   C480.148,250.053,474.778,255.424,468.154,255.424z"/>
	<path color={"#57565C"} d="M468.154,198.334h-47.299c-6.624,0-11.993-5.369-11.993-11.993v-10.788   c0-6.624,5.369-11.993,11.993-11.993h47.299c6.624,0,11.993,5.369,11.993,11.993v10.788   C480.148,192.964,474.778,198.334,468.154,198.334z"/>
	<path color={"#57565C"} d="M468.154,369.602h-47.299c-6.624,0-11.993-5.369-11.993-11.993v-10.788   c0-6.624,5.369-11.993,11.993-11.993h47.299c6.624,0,11.993,5.369,11.993,11.993v10.788   C480.148,364.232,474.778,369.602,468.154,369.602z"/>
	<path color={"#57565C"} d="M468.154,426.692h-47.299c-6.624,0-11.993-5.369-11.993-11.993V403.91   c0-6.624,5.369-11.993,11.993-11.993h47.299c6.624,0,11.993,5.369,11.993,11.993v10.788   C480.148,421.321,474.778,426.692,468.154,426.692z"/>
	<path color={"#57565C"} d="M285.409,294.256h-47.298c-6.624,0-11.993-5.369-11.993-11.993v-10.788   c0-6.624,5.369-11.993,11.993-11.993h47.298c6.624,0,11.993,5.369,11.993,11.993v10.788   C297.402,288.886,292.033,294.256,285.409,294.256z"/>
	<path color={"#57565C"} d="M285.409,351.345h-47.298c-6.624,0-11.993-5.369-11.993-11.993v-10.788   c0-6.624,5.369-11.993,11.993-11.993h47.298c6.624,0,11.993,5.369,11.993,11.993v10.788   C297.402,345.975,292.033,351.345,285.409,351.345z"/>
	<path color={"#57565C"} d="M285.409,408.435h-47.298c-6.624,0-11.993-5.369-11.993-11.993v-10.788   c0-6.624,5.369-11.993,11.993-11.993h47.298c6.624,0,11.993,5.369,11.993,11.993v10.788   C297.402,403.064,292.033,408.435,285.409,408.435z"/>
	<path color={"#57565C"} d="M91.143,294.256H43.845c-6.624,0-11.993-5.369-11.993-11.993v-10.788   c0-6.624,5.369-11.993,11.993-11.993h47.299c6.624,0,11.993,5.369,11.993,11.993v10.788   C103.137,288.886,97.767,294.256,91.143,294.256z"/>
	<path color={"#57565C"} d="M91.143,351.345H43.845c-6.624,0-11.993-5.369-11.993-11.993v-10.788   c0-6.624,5.369-11.993,11.993-11.993h47.299c6.624,0,11.993,5.369,11.993,11.993v10.788   C103.137,345.975,97.767,351.345,91.143,351.345z"/>
	<path color={"#57565C"} d="M91.143,408.435H43.845c-6.624,0-11.993-5.369-11.993-11.993v-10.788   c0-6.624,5.369-11.993,11.993-11.993h47.299c6.624,0,11.993,5.369,11.993,11.993v10.788   C103.137,403.064,97.767,408.435,91.143,408.435z"/>
</g>
</svg>
       
    )
}