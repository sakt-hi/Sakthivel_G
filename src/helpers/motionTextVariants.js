export const aboutVariants ={
    initial:{
        y:-100,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}

export const textVariants ={
    initial:{
        y:-200,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

export const skillTextVariants ={
    initial:{
        x:-200,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
}

export const parallaxTextVariants ={
    initial:{
        x:-200,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
}

export const staggerVariants = {
    open:{
        transition:{
            staggerChildren:0.1
        }
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1
        }
    }
}

export const itemVariants={
    open:{
        y:0,
        opacity:1,
    },
    closed:{
        y:50,
        opacity:0,
        
    }
}

export const expItemVariants={
    open:{
        x:0,
        opacity:1,
        transition:{duration:0.5}
    },
    closed:{
        x:100,
        opacity:0,
        
    }
}

export const contactVariants = {
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        }
    }
}