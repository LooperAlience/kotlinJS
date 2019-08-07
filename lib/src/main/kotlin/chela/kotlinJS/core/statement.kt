package chela.kotlinJS.core

inline fun <T> _try(block:()->T) = try{block()}catch(e:Throwable){null}