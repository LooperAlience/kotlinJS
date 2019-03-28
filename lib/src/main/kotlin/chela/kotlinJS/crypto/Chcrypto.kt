package chela.kotlinJS.crypto

import org.khronos.webgl.Int8Array
import kotlin.random.Random


object Chcrypto{
    /*
    private val sha256 = MessageDigest.getInstance("SHA-256")
    fun sha256(v:String):String
            = sha256.digest(v.toByteArray()).fold(""){ str, it-> str+"%02x".format(it)}

    fun rsaEncrypt(v:ByteArray, publicKey:PublicKey)= Rsa.encrypt(v, publicKey)
    fun rsaDecrypt(v:String) = Rsa.decrypt(v)
*/
    fun aesKey() = generateRandomKey(32)
    fun aesEncryptByte(v:String, secretKey:Int8Array) = AES256.encryptByte(v, secretKey)
    fun aesDecryptByte(v:Int8Array, secretKey:Int8Array) = AES256.decryptByte(v, secretKey)

    fun generateRandomKey(lengthBits:Int) = Int8Array(lengthBits).apply{set(Random.nextBytes(lengthBits).toTypedArray())}

    //https://github.com/inexorabletash/text-encoding
    private val textEncoder:dynamic = js("new TextEncoder()")
    private val textDecoder:dynamic = js("new TextDecoder('utf-8')")

    @Suppress("UnsafeCastFromDynamic")
    fun textEncode(v:String):Int8Array = textEncoder.encode(v)
    @Suppress("UnsafeCastFromDynamic")
    fun textDecode(v:Int8Array):String = textDecoder.decode(v)
}
object AES256{//AES/CBC/PKCS7Padding
    //https://github.com/asmcrypto/asmcrypto.js/
    fun encryptByte(v:String, secretKey:Int8Array):Int8Array = encryptByte(Chcrypto.textEncode(v), secretKey)
    fun encryptByte(v:Int8Array, secretKey:Int8Array):Int8Array{
        if(secretKey.length != 32) throw Throwable("invalid keyLength 32 != ${secretKey.length}")
        @Suppress("UnsafeCastFromDynamic")
        return js("asmCrypto").AES_CBC.encrypt(v, secretKey, true, secretKey.subarray(0, 16))
    }
    fun decryptByte(v:Int8Array, secretKey:Int8Array):String{
        if(secretKey.length != 32) throw Throwable("invalid keyLength 32 != ${secretKey.length}")
        @Suppress("UnsafeCastFromDynamic")
        return Chcrypto.textDecode(js("asmCrypto").AES_CBC.decrypt(v, secretKey, true, secretKey.subarray(0, 16)))
    }
}