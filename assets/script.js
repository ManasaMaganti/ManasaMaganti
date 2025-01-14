window.addEventListener("load", async () => {

    AOS.init();

    function fixOptions(options) {
        if (!options) {
            return;
        }

        if (options.particles) {
            if (!(options.particles.groups instanceof Array) || !options.particles.groups) {
                options.particles.groups = [];
            }
        }

        if (options.interactivity) {
            if (options.interactivity.modes) {
                if (options.interactivity.modes.push) {
                    if (
                        !(options.interactivity.modes.push.groups instanceof Array) ||
                        !options.interactivity.modes.push.groups
                    ) {
                        options.interactivity.modes.push.groups = [];
                    }
                }
            }
        }

        if (!(options.manualParticles instanceof Array) || !options.manualParticles) {
            options.manualParticles = [];
        }

        if (!(options.responsive instanceof Array) || !options.responsive) {
            options.responsive = [];
        }

        if (!(options.themes instanceof Array) || !options.themes) {
            options.themes = [];
        }
        return options
    }

    await loadAll(tsParticles);
    let options = tsParticles.configs.absorbers;
    const customOptions = {
        "autoPlay": true,
        "background": {
            "color": {
                "value": "#ffffff00"
            }
        },
        "fullScreen": {
            "enable": false,
            "zIndex": 0
        },
        "fpsLimit": 30,
        "interactivity": {
            "events": {
                "onHover": {
                    "enable": true,
                    "mode": {},
                    "parallax": {
                        "enable": true,
                        "force": 90,
                        "smooth": 20
                    }
                },
                "onClick": {
                    "enable": false,
                }
            },
            modes: {
                "repulse": {

                    "factor": 10,
                },
                attract: {
                    "maxSpeed": 1,
                    enable: true
                },
            }
        },
        "particles": {
            move: {
                warp: false,
                enable: false
            },
            "color": {
                "value": "#aba9a9"
            },
            "number": {
                "value": 250,
                limit: {
                    value: 250
                }
            },
            "size": {
                "value": {
                    "min": 1,
                    "max": 5
                }
            },
            "destroy": {
                "mode": "none"
            },
            collisions: {
                absorb: {
                    speed: 0
                },
                "maxSpeed": 1,
                enable: false
            }
        },
        "smooth": true,
        "absorbers": {
            "color": {
                "value": "#fff"
            },
            "draggable": false,
            "opacity": 1,
            "destroy": false,
            "orbits": false,
            "size": {
                "value": {
                    "min": 40,
                    "max": 50
                },
                "density": 1,
                "limit": {
                    "radius": 10,
                    "mass": 1
                }
            },
            "position": {
                "x": 50,
                "y": 50
            },
            "speed": 0
        }
    };

    options = fixOptions(options);
    options = deepUpsert(options, customOptions);
    await tsParticles.load({
        id: "tsparticles",
        options: options
    });


    function deepUpsert(original, modifications) {
        if (typeof modifications !== 'object' || modifications === null) {
            return modifications;
        }

        if (typeof original !== 'object' || original === null) {
            original = {};
        }

        for (const key in modifications) {
            if (!Object.prototype.hasOwnProperty.call(modifications, key)) {
                continue;
            }

            const originalVal = original[key];
            const modVal = modifications[key];

            if (typeof modVal === 'object' && modVal !== null && !Array.isArray(modVal)) {
                original[key] = deepUpsert(originalVal, modVal);
            } else {
                original[key] = modVal;
            }
        }

        return original;
    }


});