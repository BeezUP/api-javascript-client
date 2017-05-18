# BeezUpApi.InputFileReadConfiguration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | [**FileFormatStrategy**](FileFormatStrategy.md) |  | 
**encodingTypeName** | **String** | The encoding type. UTF-8 by default. | [optional] [default to &#39;UTF-8&#39;]
**cultureName** | **String** | The culture name of the file.  (i.e. fr-FR). If null then Invariant culture will be used. | [optional] [default to &#39;&#39;]
**csvFileReadProperties** | [**InputFileReadCsvConfiguration**](InputFileReadCsvConfiguration.md) |  | [optional] 
**xmlFileReadProperties** | [**InputFileReadXmlConfiguration**](InputFileReadXmlConfiguration.md) |  | [optional] 


