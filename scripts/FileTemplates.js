const fileTypesTemplates = {
    "terrain_texture.json": {
        "resource_pack_name": "vanilla",
        "texture_name": "atlas.terrain",
        "padding": 8,
        "num_mip_levels": 4,
        "texture_data": {
            //sample:

            /*
            "example_block": {
                 "textures": "textures/blocks/example_block"
            },
            */
        }
    },
    "blocks.json": {
        //sample

        /*
        "example_block": {
            "sound": "wood",
            "textures": {
			    "down": "example_block_down",
			    "up": "example_block_up",
			    "side": "example_block_side"
		    }
        }
        */
    },
    "flipbook_textures.json": [    // [{...}]
        {
            "flipbook_texture": "",     // "textures/blocks/example_block.png"  (path)
            "atlas_tile": "",   // "example_block"  (texture material from )
            "frames": [],   // [0, 1, 2, ...]   (frame order)
            "ticks_per_frame": 1,       // (transition speed)
            "blend_frames": true    // true|false statement (smooth transition?)
        }   
    ]
}