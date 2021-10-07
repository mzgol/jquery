import { document } from "../var/document.js";

var preservedScriptAttributes = {
	type: true,
	src: true,
	nonce: true,
	noModule: true
};

export function DOMEval( code, node, doc ) {
	var i, script;

	if ( node.nodeType === 1 ) {
		script = node;
	} else {

		doc = doc || document;
		script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
	}

	doc.head.appendChild( script ).parentNode.removeChild( script );
}
