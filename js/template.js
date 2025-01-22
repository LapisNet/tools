function loadstring( string, object = global ){
  var regex = /(\{\{)([^(\}\})]+)(\}\})/
  var mdata
  while( ( mdata = string.match( regex ) ) ){
    string = string.replace( mdata[0], object[mdata[2]] )
  }
  // example : {{ 114514 }}
  return string
}
